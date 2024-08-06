import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorldComponent } from './our-world.component';

describe('OurWorldComponent', () => {
  let component: OurWorldComponent;
  let fixture: ComponentFixture<OurWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
