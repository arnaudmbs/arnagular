import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Em08 } from './em08';

describe('Em08', () => {
  let component: Em08;
  let fixture: ComponentFixture<Em08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Em08],
    }).compileComponents();

    fixture = TestBed.createComponent(Em08);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
