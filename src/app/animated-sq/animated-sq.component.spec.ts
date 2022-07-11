import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSqComponent } from './animated-sq.component';

describe('AnimatedSqComponent', () => {
  let component: AnimatedSqComponent;
  let fixture: ComponentFixture<AnimatedSqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedSqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedSqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
