import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExosMat } from './exos-mat';

describe('ExosMat', () => {
  let component: ExosMat;
  let fixture: ComponentFixture<ExosMat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExosMat],
    }).compileComponents();

    fixture = TestBed.createComponent(ExosMat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
