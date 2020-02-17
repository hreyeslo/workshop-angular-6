import { NgModule } from '@angular/core';
// Shared module
import { SharedBreedsApiModule } from '../../../shared/services_api';

@NgModule({
  imports: [SharedBreedsApiModule]
})
export class FinderServiceApiModule {}
