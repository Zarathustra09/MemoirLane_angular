import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntryService } from '../../services/entry.service';
import { Entry } from '../../models/entry.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class UpdateEntryComponent implements OnInit {
  entryId!: number;
  entry: Entry = {
    id: 0,
    user_Id: 0,
    title: '',
    content: '',
    created_At: new Date(),
    updated_At: new Date()
  };

  constructor(
    private route: ActivatedRoute,
    private entryService: EntryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.entryId = Number(this.route.snapshot.paramMap.get('id'));
    this.entryService.getEntry(this.entryId).subscribe(
      (entry: Entry) => {
        this.entry = entry;
      },
      error => {
        console.error('Error fetching entry', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  updateEntry(): void {
    const updatedEntry: Entry = {
      ...this.entry,
      updated_At: new Date()
    };

    this.entryService.updateEntry(this.entry.id, updatedEntry).subscribe(
      response => {
        console.log('Entry updated successfully', response);
        this.router.navigate(['/dashboard']); // Navigate to the entries list or another appropriate page
      },
      error => {
        console.error('Error updating entry', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  deleteEntry(): void {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.entryService.deleteEntry(this.entry.id).subscribe(
        response => {
          console.log('Entry deleted successfully', response);
          this.router.navigate(['/dashboard']); // Navigate to the entries list or another appropriate page
        },
        error => {
          console.error('Error deleting entry', error);
          // Handle error (e.g., show error message)
        }
      );
    }
  }
}
