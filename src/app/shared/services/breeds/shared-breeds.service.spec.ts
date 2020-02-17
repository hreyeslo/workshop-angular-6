import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
// Core
import { APP_CONFIG, ConfigManager } from '../../../core/core_api';

import { SharedBreedsService } from './shared-breeds.service';

describe('SharedBreedsService', () => {
  let service: SharedBreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: APP_CONFIG,
          useClass: ConfigManager
        },
        {
          provide: SharedBreedsService,
          useClass: SharedBreedsService,
          deps: [Injector]
        }
      ]
    });
    const configManager = TestBed.inject<ConfigManager>(APP_CONFIG);
    configManager.config = {
      host: 'https://dog.ceo/api',
      randomImages: 3,
      i18n: {
        scope: {
          forRoot: '/i18n/${lang}/',
          forChild: '/i18n/${lang}/pages/'
        },
        default: 'en',
        langs: ['en', 'es']
      }
    };
    service = TestBed.inject(SharedBreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
