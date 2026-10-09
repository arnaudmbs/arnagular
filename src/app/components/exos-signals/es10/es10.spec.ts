import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Es10 } from './es10';

describe('Es10', () => {
  let component: Es10;
  let fixture: ComponentFixture<Es10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es10],
    }).compileComponents();

    fixture = TestBed.createComponent(Es10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
