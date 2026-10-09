import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppEb3 } from './app-eb3';

describe('AppEb3', () => {
  let component: AppEb3;
  let fixture: ComponentFixture<AppEb3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEb3],
    }).compileComponents();

    fixture = TestBed.createComponent(AppEb3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
