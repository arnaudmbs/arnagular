import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Es05 } from './es05';

describe('Es05', () => {
  let component: Es05;
  let fixture: ComponentFixture<Es05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es05],
    }).compileComponents();

    fixture = TestBed.createComponent(Es05);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
