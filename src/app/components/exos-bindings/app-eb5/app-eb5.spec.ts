import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppEb5 } from './app-eb5';

describe('AppEb5', () => {
  let component: AppEb5;
  let fixture: ComponentFixture<AppEb5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEb5],
    }).compileComponents();

    fixture = TestBed.createComponent(AppEb5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
