import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Es08 } from './es08';

describe('Es08', () => {
  let component: Es08;
  let fixture: ComponentFixture<Es08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es08],
    }).compileComponents();

    fixture = TestBed.createComponent(Es08);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
