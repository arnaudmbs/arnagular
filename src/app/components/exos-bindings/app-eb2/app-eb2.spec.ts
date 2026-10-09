import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppEb2 } from './app-eb2';

describe('AppEb2', () => {
  let component: AppEb2;
  let fixture: ComponentFixture<AppEb2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEb2],
    }).compileComponents();

    fixture = TestBed.createComponent(AppEb2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
