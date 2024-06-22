import { Component } from '@angular/core';
import {CalendarComponent} from "../calendar/calendar.component";
import {EntryService} from "../../services/entry.service";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalendarComponent, RouterLink],
  providers: [EntryService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
