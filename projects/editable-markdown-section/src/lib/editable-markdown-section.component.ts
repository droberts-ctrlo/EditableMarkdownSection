import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'editable-markdown-section',
  templateUrl: './editable-markdown-section.component.html',
  styleUrls: []
})
export class EditableMarkdownSectionComponent {
  @Input()
  value?: string;
  @Output()
  valueChange = new EventEmitter<string>();
  render = true;

  doFocus() {
    this.render = false;
  }

  doBlur(eventTarget: EventTarget) {
    const target = eventTarget as HTMLElement;
    this.valueChange.emit(target.innerText);
    this.render = true;
  }
}
