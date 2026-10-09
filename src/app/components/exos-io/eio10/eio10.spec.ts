import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio10 } from './eio10';

describe('Eio10', () => {
  let component: Eio10;
  let fixture: ComponentFixture<Eio10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio10],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
