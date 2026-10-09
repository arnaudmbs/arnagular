import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio01 } from './eio01';

describe('Eio01', () => {
  let component: Eio01;
  let fixture: ComponentFixture<Eio01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio01],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
