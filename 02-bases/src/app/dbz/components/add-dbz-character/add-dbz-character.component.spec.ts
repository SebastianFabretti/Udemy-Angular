import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDbzCharacterComponent } from './add-dbz-character.component';

describe('AddDbzCharacterComponent', () => {
  let component: AddDbzCharacterComponent;
  let fixture: ComponentFixture<AddDbzCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDbzCharacterComponent]
    });
    fixture = TestBed.createComponent(AddDbzCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
