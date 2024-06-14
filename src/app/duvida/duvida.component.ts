import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'app-duvida',
  templateUrl: './duvida.component.html',
  styleUrls: ['../app.component.scss', './duvida.component.scss', './duvida.component.desktop.scss']
})
export class DuvidaComponent implements OnInit {

  document: any;
  content: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private doc: DocumentsService,
    private change: ChangeDetectorRef
  ) {}
  
  ngOnInit(): void {
    let element = document.querySelector('.loading') as HTMLElement;
    element.style.display = 'flex';

    const documentLocal = localStorage.getItem('document');
    this.document = JSON.parse(documentLocal || '[]');

    console.log(this.document)
    this.route.params.subscribe((params) => {
      const id = params['id'];
        this.doc.getDocumentById(id).subscribe(
          (response: any) => {
          
          this.document = response.data[0]
          this.content = this.document.content
          localStorage.setItem('document', JSON.stringify(this.document))
          let element = document.querySelector('.loading') as HTMLElement;
          element.style.display = 'none';
          this.change.detectChanges();
        },
        (error) => {
          console.error(error);
          
          let element = document.querySelector('.loading') as HTMLElement;
          element.style.display = 'none';
        }
      ) 
      })  
  }
}
