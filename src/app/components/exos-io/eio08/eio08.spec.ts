import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio08 } from './eio08';

describe('Eio08', () => {
  let component: Eio08;
  let fixture: ComponentFixture<Eio08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio08],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio08);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
