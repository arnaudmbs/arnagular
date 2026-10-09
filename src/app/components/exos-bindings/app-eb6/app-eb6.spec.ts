import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppEb6 } from './app-eb6';

describe('AppEb6', () => {
  let component: AppEb6;
  let fixture: ComponentFixture<AppEb6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEb6],
    }).compileComponents();

    fixture = TestBed.createComponent(AppEb6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
