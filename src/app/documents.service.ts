import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private apiUrlDocs = 'https://apinotionintegrationsup.onrender.com/notion-data/';
  private localStorageKey = 'documentsData'

  
  documents: string[] = [];

  constructor(private http: HttpClient) { }

  getTitles(): Observable<any[]> {
    const params = new HttpParams().set('fields', 'id,name,content,category');

    return this.http.get<any>(`${this.apiUrlDocs}notion-data`, { params }).pipe(
      map((response: { data: any[]; }) => response.data.map((item: any) => ({
        id: item.page_id,
        name: item.name,
        content: item.content,
        category: item.category
      }))),
      tap(items => localStorage.setItem(this.localStorageKey, JSON.stringify(items)))
    );
  }

  updateLocalStorage(): string[] {
    const updateData = localStorage.getItem(this.localStorageKey);
    if (updateData) {
      return this.documents = JSON.parse(updateData)
    } else {
      return this.documents = [];
    }
  }

  getDocumentById(id: string): Observable<any>{
    //const params = new HttpParams().set('fields', 'id,name,content,category');

    return this.http.get<any>(`${this.apiUrlDocs}notion-data/${id}`);
  }
}
