import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppEb8 } from './app-eb8';

describe('AppEb8', () => {
  let component: AppEb8;
  let fixture: ComponentFixture<AppEb8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEb8],
    }).compileComponents();

    fixture = TestBed.createComponent(AppEb8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
