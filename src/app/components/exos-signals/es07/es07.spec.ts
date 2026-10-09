import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Es07 } from './es07';

describe('Es07', () => {
  let component: Es07;
  let fixture: ComponentFixture<Es07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es07],
    }).compileComponents();

    fixture = TestBed.createComponent(Es07);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
