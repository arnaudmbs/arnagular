import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppEb10 } from './app-eb10';

describe('AppEb10', () => {
  let component: AppEb10;
  let fixture: ComponentFixture<AppEb10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEb10],
    }).compileComponents();

    fixture = TestBed.createComponent(AppEb10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
