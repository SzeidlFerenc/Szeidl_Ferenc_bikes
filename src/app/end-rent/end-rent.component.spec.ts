import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndRentComponent } from './end-rent.component';

describe('EndRentComponent', () => {
  let component: EndRentComponent;
  let fixture: ComponentFixture<EndRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndRentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
