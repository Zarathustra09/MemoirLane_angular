import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { CalendarOptions, Calendar, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg, EventDragStopArg } from '@fullcalendar/interaction';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import {DatePipe, NgIf} from "@angular/common";
import { EntryService } from "../../services/entry.service"; // Import EntryService
import { Entry } from "../../models/entry.model";
import { Router } from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  standalone: true,
  providers: [EntryService],
  imports: [
    NgIf,
    FullCalendarModule,
    HttpClientModule,
    DatePipe
  ],
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions?: CalendarOptions;
  @ViewChild('fullcalendar') fullcalendar?: FullCalendarComponent;

  constructor(
    private entryService: EntryService,
    private router: Router
  ) { }

  ngOnInit() {
    // Need to load calendar bundle first
    forwardRef(() => Calendar);

    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      editable: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [],
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventDragStop: this.handleEventDragStop.bind(this),
    };

    this.fetchEntries();
  }

  fetchEntries() {
    this.entryService.getAllEntries().subscribe((entries: Entry[]) => {
      this.calendarOptions!.events = entries.map(entry => ({
        id: entry.id?.toString(), // Ensure each entry has an id
        title: entry.title,
        start: entry.created_At, // Assuming created_At is in ISO format or a Date object
        backgroundColor: '#3788d8', // Optional: set a default background color
        borderColor: '#3788d8', // Optional: set a default border color
        textColor: '#ffffff' // Optional: set a default text color
      }));
      if (this.fullcalendar) {
        this.fullcalendar.getApi().removeAllEvents();
        this.fullcalendar.getApi().addEventSource(this.calendarOptions!.events);
      }
    });
  }

  handleDateClick(arg: DateClickArg) {
    console.log(arg);
  }

  handleEventClick(arg: EventClickArg) {
    // Navigate to the update-entry page with the clicked entry's id
    this.router.navigate(['/update-entry', arg.event.id]);
  }

  handleEventDragStop(arg: EventDragStopArg) {
    console.log(arg);
  }

  updateHeader() {
    this.calendarOptions!.headerToolbar = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }
}
