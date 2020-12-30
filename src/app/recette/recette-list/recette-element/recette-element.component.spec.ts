import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteElementComponent } from './recette-element.component';

describe('RecetteElementComponent', () => {
  let component: RecetteElementComponent;
  let fixture: ComponentFixture<RecetteElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
