import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppEb4 } from './app-eb4';

describe('AppEb4', () => {
  let component: AppEb4;
  let fixture: ComponentFixture<AppEb4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEb4],
    }).compileComponents();

    fixture = TestBed.createComponent(AppEb4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
