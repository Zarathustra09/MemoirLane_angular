import { Component } from '@angular/core';
import { EntryService } from '../../services/entry.service';
import { Entry } from '../../models/entry.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  standalone: true,
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent {



  constructor(
    private entryService: EntryService,
    private router: Router
  ) { }

  saveEntry() {
    const titleElement = document.getElementById('entry-title');
    const contentElement = document.getElementById('content');
    const user_Id = localStorage.getItem('user_Id');

    if (!user_Id) {
      console.error('User ID not found in local storage');
      return;
    }

    if (titleElement && contentElement) {
      const title = titleElement.innerText;
      const content = contentElement.innerText;
      const newEntry: Entry = {
        id: 1, // This will be set by the server
        user_Id: Number(user_Id),
        title: title,
        content: content,
        created_At: new Date(),
        updated_At: new Date()
      };

      console.log(localStorage.getItem('user_Id'));

      this.entryService.createEntry(newEntry).subscribe(
        response => {
          console.log('Entry saved successfully', response);
          this.router.navigate(['/calendar']); // Navigate to the entries list or another appropriate page
        },
        error => {
          console.error('Error saving entry', error);
          // Handle error (e.g., show error message)
        }
      );
    } else {
      console.error('Title or content element not found');
    }
  }

}
