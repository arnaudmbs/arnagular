import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppEb1 } from './app-eb1';

describe('AppEb1', () => {
  let component: AppEb1;
  let fixture: ComponentFixture<AppEb1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEb1],
    }).compileComponents();

    fixture = TestBed.createComponent(AppEb1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
