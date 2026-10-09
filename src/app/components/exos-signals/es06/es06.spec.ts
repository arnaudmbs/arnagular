import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Es06 } from './es06';

describe('Es06', () => {
  let component: Es06;
  let fixture: ComponentFixture<Es06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es06],
    }).compileComponents();

    fixture = TestBed.createComponent(Es06);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
