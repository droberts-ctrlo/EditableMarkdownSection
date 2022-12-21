import {NgModule} from '@angular/core';
import {EditableMarkdownSectionComponent} from './editable-markdown-section.component';
import {MarkdownerModule} from "markdowner";

@NgModule({
  declarations: [
    EditableMarkdownSectionComponent
  ],
  imports: [
    MarkdownerModule
  ],
  exports: [
    EditableMarkdownSectionComponent
  ]
})
export class EditableMarkdownSectionModule {
}
