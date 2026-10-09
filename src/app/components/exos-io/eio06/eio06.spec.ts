import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio06 } from './eio06';

describe('Eio06', () => {
  let component: Eio06;
  let fixture: ComponentFixture<Eio06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio06],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio06);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
