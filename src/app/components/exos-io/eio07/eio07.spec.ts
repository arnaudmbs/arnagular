import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio07 } from './eio07';

describe('Eio07', () => {
  let component: Eio07;
  let fixture: ComponentFixture<Eio07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio07],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio07);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
