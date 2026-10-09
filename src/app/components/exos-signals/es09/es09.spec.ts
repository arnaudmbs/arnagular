import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Es09 } from './es09';

describe('Es09', () => {
  let component: Es09;
  let fixture: ComponentFixture<Es09>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es09],
    }).compileComponents();

    fixture = TestBed.createComponent(Es09);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
