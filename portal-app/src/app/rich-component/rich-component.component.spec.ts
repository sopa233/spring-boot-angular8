import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichComponentComponent } from './rich-component.component';

describe('RichComponentComponent', () => {
  let component: RichComponentComponent;
  let fixture: ComponentFixture<RichComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
