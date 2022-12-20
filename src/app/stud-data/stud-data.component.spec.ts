import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudDataComponent } from './stud-data.component';

describe('StudDataComponent', () => {
  let component: StudDataComponent;
  let fixture: ComponentFixture<StudDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
