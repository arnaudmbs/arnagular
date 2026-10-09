import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExosIo } from './exos-io';

describe('ExosIo', () => {
  let component: ExosIo;
  let fixture: ComponentFixture<ExosIo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExosIo],
    }).compileComponents();

    fixture = TestBed.createComponent(ExosIo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
