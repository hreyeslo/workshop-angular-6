import { NbLayoutModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
// Shared
import { I18nModule } from '../../core/core_api';
// UI module
import { SelectModule } from '../../../../projects/select/src/public-api';
import { PhotoModule } from '../../../../projects/photo/src/public-api';
// Module parts
import { FinderServiceApiModule } from './service/finder-service-api.module';
import { FinderComponent } from './component/finder.component';
import { FinderRoutingModule } from './finder-routing.module';
import { featureStoreName } from './store/finder.state';
import { FinderEffects } from './store/finder.effects';
import { finderReducer } from './store/finder.reducer';

@NgModule({
  declarations: [
    FinderComponent
  ],
  imports: [
    CommonModule,
    FinderRoutingModule,
    EffectsModule.forFeature([FinderEffects]),
    StoreModule.forFeature(featureStoreName, finderReducer),
    I18nModule.forChild('finder'),
    FinderServiceApiModule,
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    SelectModule,
    PhotoModule
  ]
})
export class FinderModule {}
