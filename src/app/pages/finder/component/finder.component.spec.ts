import { NbThemeModule, NbLayoutModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
// UI
import { SelectModule } from '../../../../../projects/select/src/public-api';
import { PhotoModule } from '../../../../../projects/photo/src/public-api';

import { FinderServiceApiModule } from '../service/finder-service-api.module';
import { FinderComponent } from './finder.component';

describe('FinderComponent', () => {
  let component: FinderComponent;
  let fixture: ComponentFixture<FinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          TranslateModule.forRoot(),
          StoreModule.forRoot({}),
          NbThemeModule.forRoot({name: 'default'}),
          FinderServiceApiModule,
          NbLayoutModule,
          NbButtonModule,
          NbEvaIconsModule,
          NbIconModule,
          SelectModule,
          PhotoModule
        ],
        declarations: [FinderComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
