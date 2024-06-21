import { Component } from '@angular/core';
import {CalendarComponent} from "../calendar/calendar.component";
import {EntryService} from "../../services/entry.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalendarComponent],
  providers: [EntryService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
