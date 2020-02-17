import { NbSelectModule, NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
// Component parts
import { SelectComponent } from './select.component';
import { ISelectItem } from '../select.model';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          CommonModule,
          NbThemeModule.forRoot({name: 'default'}),
          NbLayoutModule,
          NbSelectModule
        ],
        declarations: [SelectComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return value', () => {
    const item: ISelectItem = {
      name: 'Dog',
      value: 'dog'
    };
    const value = component.trackBy(0, item);
    expect(value).toEqual(item.value);
  });

});
