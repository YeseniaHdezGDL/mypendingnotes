import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @ViewChild('list')
  private list = {} as ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  newNote() {
    const textarea = this.renderer.createElement('textarea');
    const text = this.renderer.createText('Este es un pendiente nuevo');
    this.renderer.appendChild(textarea, text);
    this.renderer.appendChild(this.list.nativeElement, textarea);
    this.renderer.setAttribute(textarea, 'id', 'note');
  }

}

