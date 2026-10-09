import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppEb9 } from './app-eb9';

describe('AppEb9', () => {
  let component: AppEb9;
  let fixture: ComponentFixture<AppEb9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEb9],
    }).compileComponents();

    fixture = TestBed.createComponent(AppEb9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
