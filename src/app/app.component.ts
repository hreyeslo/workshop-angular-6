import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, ConfigManager, setLang } from './core/core_api';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// UI
import { SelectItems } from '../../projects/select/src/public-api';
// Component parts
import { environment } from '../environments/environment';
import { Istate } from './example/example.state';

@Component({
  selector: 'dogs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  languages: SelectItems = [];
  currentLanguage: string;

  userData$: Observable<Istate>; 

  constructor(
    @Inject(APP_CONFIG) private _configManager: ConfigManager,
    private _translateService: TranslateService,
    private _store: Store
  ) {
    this._setInitialLanguage();
  }

  ngOnInit(){
    // Asignar el selector GET_NAME al observable userData$
  }

  changeLang(lang: string): void {
    this._store.dispatch(setLang(lang));
  }

  // Private
  _setInitialLanguage(): void {
    this._translateService.addLangs(this._configManager.config.i18n.langs || [environment.defaultLang]);
    const availableLanguages = this._translateService.getLangs();
    const defaultLang = this._configManager.config.i18n.default || environment.defaultLang;
    const browserLang = this._translateService.getBrowserLang();
    this.currentLanguage = availableLanguages.indexOf(browserLang) > -1 ? browserLang : defaultLang;
    this._translateService.setDefaultLang(this.currentLanguage);
    this.languages = this._getSelectListLanguages(availableLanguages);
    this.changeLang(this.currentLanguage);
  }

  _getSelectListLanguages(languages: string[]): SelectItems {
    return languages.map(language => ({
      name: language.toUpperCase(),
      value: language
    }));
  }
}
