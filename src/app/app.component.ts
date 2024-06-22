import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {EntryService} from "./services/entry.service";
import {AuthService} from "./services/auth.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [RouterOutlet,EntryService, AuthService]
})
export class AppComponent {
  title = 'MemoirLane';
}
