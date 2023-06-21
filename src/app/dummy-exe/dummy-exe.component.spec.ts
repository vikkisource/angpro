import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyExeComponent } from './dummy-exe.component';

describe('DummyExeComponent', () => {
  let component: DummyExeComponent;
  let fixture: ComponentFixture<DummyExeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyExeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyExeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
