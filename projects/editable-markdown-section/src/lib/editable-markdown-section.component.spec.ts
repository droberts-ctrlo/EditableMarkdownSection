import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableMarkdownSectionComponent } from './editable-markdown-section.component';

describe('EditableMarkdownSectionComponent', () => {
  let component: EditableMarkdownSectionComponent;
  let fixture: ComponentFixture<EditableMarkdownSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableMarkdownSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableMarkdownSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
