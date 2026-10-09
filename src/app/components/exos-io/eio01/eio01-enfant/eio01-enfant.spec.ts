import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio01Enfant } from './eio01-enfant';

describe('Eio01Enfant', () => {
  let component: Eio01Enfant;
  let fixture: ComponentFixture<Eio01Enfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio01Enfant],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio01Enfant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
