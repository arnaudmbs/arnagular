import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio02 } from './eio02';

describe('Eio02', () => {
  let component: Eio02;
  let fixture: ComponentFixture<Eio02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio02],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
