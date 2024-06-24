import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-history',
  templateUrl: './doc-history.component.html',
  styleUrls: ['./doc-history.component.scss', './doc-history.component.desktop.scss']
})
export class DocHistoryComponent implements OnInit {

  doc: any;

  constructor() {
    this.doc = JSON.parse(localStorage.getItem('document') || '[]');
  }

  ngOnInit(): void {
      console.log(this.doc)
  }

  formatContent(content: any[], maxChars: number): string {
    return content.slice(0, 2).map(c => c.text).join(' ').slice(0, maxChars) + (content.length > maxChars ? '...' : '...');
  }
}
