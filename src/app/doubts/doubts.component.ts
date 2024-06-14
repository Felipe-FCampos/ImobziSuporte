import { Component, Input, OnInit } from '@angular/core';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'app-doubts',
  templateUrl: './doubts.component.html',
  styleUrls: ['../app.component.scss', './doubts.component.scss', './doubts.component.desktop.scss']
})
export class DoubtsComponent implements OnInit {
  documents: any[] = [];

  constructor( private documentsService: DocumentsService){ }

  ngOnInit(): void {
    let element = document.querySelector('.loading') as HTMLElement;
    element.style.display = 'flex';

    this.documents = this.documentsService.updateLocalStorage();
    this.documentsService.getTitles().subscribe(data => {
      this.documents = data;
      let element = document.querySelector('.loading') as HTMLElement;
      element.style.display = 'none';
    });
  }

  filterDocuments: any[] = this.documents;
  select: string | null = null

  debugFunc(){
    if(this.documents){
      console.log('this is another test: ' + this.documents)
    } else {
      console.log('Not receiving data.')
    }
  }

  showData(){
    console.log(this.documents)
  }

  showIds(){
    console.log(this.documents.map(doc => doc.page_id))
  }

  filter(type: string){

    this.select = type
    this.filterDocuments = this.documents.filter(document => document.type === type);
  }

  formatDescription(description: string): string {
    return description.replace(/\n/g, '<br>');
  }

  formatContent(content: any[], maxChars: number): string {
    return content.slice(0, 2).map(c => c.text).join(' ').slice(0, maxChars) + (content.length > maxChars ? '...' : '...');
  }

  formatCategory(category: any[]){
    
  }
}
