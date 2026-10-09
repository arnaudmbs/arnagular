import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Es02 } from './es02';

describe('Es02', () => {
  let component: Es02;
  let fixture: ComponentFixture<Es02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es02],
    }).compileComponents();

    fixture = TestBed.createComponent(Es02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
