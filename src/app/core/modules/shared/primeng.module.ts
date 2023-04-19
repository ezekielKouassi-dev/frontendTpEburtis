import {NgModule} from "@angular/core";

import {MegaMenuModule} from 'primeng/megamenu';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    MegaMenuModule,
    TableModule,
    ButtonModule,
    CardModule,
    DialogModule,
    AutoCompleteModule,
    DropdownModule
  ],
  exports: [
    MegaMenuModule,
    TableModule,
    ButtonModule,
    CardModule,
    DialogModule,
    AutoCompleteModule,
    DropdownModule
  ]
})
export class PrimengModule {

}
