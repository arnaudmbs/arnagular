import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Es03 } from './es03';

describe('Es03', () => {
  let component: Es03;
  let fixture: ComponentFixture<Es03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es03],
    }).compileComponents();

    fixture = TestBed.createComponent(Es03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
