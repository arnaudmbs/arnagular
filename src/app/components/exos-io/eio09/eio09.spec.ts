import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio09 } from './eio09';

describe('Eio09', () => {
  let component: Eio09;
  let fixture: ComponentFixture<Eio09>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio09],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio09);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
