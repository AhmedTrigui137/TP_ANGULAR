import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcencielComponent } from './arcenciel.component';

describe('ArcencielComponent', () => {
  let component: ArcencielComponent;
  let fixture: ComponentFixture<ArcencielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArcencielComponent]
    });
    fixture = TestBed.createComponent(ArcencielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
