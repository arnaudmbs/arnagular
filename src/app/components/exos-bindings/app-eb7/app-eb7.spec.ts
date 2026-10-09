import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppEb7 } from './app-eb7';

describe('AppEb7', () => {
  let component: AppEb7;
  let fixture: ComponentFixture<AppEb7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEb7],
    }).compileComponents();

    fixture = TestBed.createComponent(AppEb7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
