import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
// Shared
import { SharedBreedsApiModule, SharedBreedsService } from '../../../shared/services_api';
import { FinderService } from './finder.service';
import { APP_CONFIG, ConfigManager } from '../../../core/core_api';

describe('FinderService', () => {
  let service: FinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedBreedsApiModule
      ],
      providers: [
        {
          provide: APP_CONFIG,
          useClass: ConfigManager
        },
        {
          provide: FinderService,
          useClass: FinderService,
          deps: [SharedBreedsService]
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
    service = TestBed.inject(FinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
