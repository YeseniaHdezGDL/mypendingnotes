import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @ViewChild('list')
  private list = {} as ElementRef;
  @ViewChild('priority')
  private priority = {} as ElementRef;

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
    this.renderer.setValue(textarea, 'cdkDrag'); //////////////////////////
    this.renderer.setAttribute(textarea, 'class', 'cdk-drag');
  }

  onChange(deviceValue: string) {
    console.log(deviceValue);
    if (deviceValue == "nourgente") {
      this.renderer.setStyle(this.priority.nativeElement, 'background-color', 'darkgreen');
    } else {
      this.renderer.setStyle(this.priority.nativeElement, 'background-color', 'brown');

    }
    
}

}

