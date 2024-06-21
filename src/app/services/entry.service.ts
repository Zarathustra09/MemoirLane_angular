import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from '../models/entry.model';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private apiUrl = 'https://localhost:7202/api/entries';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Get the token from local storage
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getAllEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  getEntry(id: number): Observable<Entry> {
    return this.http.get<Entry>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  createEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.apiUrl, entry, { headers: this.getAuthHeaders() });
  }

  updateEntry(id: number, entry: Entry): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, entry, { headers: this.getAuthHeaders() });
  }

  deleteEntry(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
