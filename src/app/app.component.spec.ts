import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule, I18nModule } from './core/core_api';
import { SelectModule } from '../../projects/select/src/public-api';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        AppRoutingModule,
        CoreModule,
        I18nModule.forRoot('app'),
        SelectModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
