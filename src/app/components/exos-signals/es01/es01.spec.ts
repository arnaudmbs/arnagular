import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Es01 } from './es01';

describe('Es01', () => {
  let component: Es01;
  let fixture: ComponentFixture<Es01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es01],
    }).compileComponents();

    fixture = TestBed.createComponent(Es01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
