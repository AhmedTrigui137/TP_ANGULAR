import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenomComponent } from './imagenom.component';

describe('ImagenomComponent', () => {
  let component: ImagenomComponent;
  let fixture: ComponentFixture<ImagenomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagenomComponent]
    });
    fixture = TestBed.createComponent(ImagenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
