import {NgModule} from '@angular/core';
import { MarkdownerModule } from 'markdowner';
import {EditableMarkdownSectionComponent} from './editable-markdown-section.component';

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
