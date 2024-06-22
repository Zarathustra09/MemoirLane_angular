import { Component } from '@angular/core';
import { EntryService } from '../../services/entry.service';
import { Entry } from '../../models/entry.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  standalone: true,
  styleUrls: ['./create-entry.component.css'],
  imports: [FormsModule] // Add FormsModule to imports
})
export class CreateEntryComponent {
  entry: Entry = {
    id: 0,
    user_Id: 0,
    title: '',
    content: '',
    created_At: new Date(),
    updated_At: new Date()
  };

  constructor(
    private entryService: EntryService,
    private router: Router
  ) { }

  saveEntry() {
    const user_Id = localStorage.getItem('user_Id');

    if (!user_Id) {
      console.error('User ID not found in local storage');
      return;
    }

    this.entry.user_Id = Number(user_Id);

    this.entryService.createEntry(this.entry).subscribe(
      response => {
        console.log('Entry saved successfully', response);
        this.router.navigate(['/dashboard']); // Navigate to the entries list or another appropriate page
      },
      error => {
        console.error('Error saving entry', error);
        // Handle error (e.g., show error message)
      }
    );
  }
}
