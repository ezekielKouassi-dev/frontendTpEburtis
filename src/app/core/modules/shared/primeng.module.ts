import { NgModule } from "@angular/core";

import { MegaMenuModule } from 'primeng/megamenu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    declarations: [],
    imports: [
        MegaMenuModule,
        TableModule,
        ButtonModule,
        CardModule,
        DialogModule
    ],
    exports: [
        MegaMenuModule,
        TableModule,
        ButtonModule,
        CardModule,
        DialogModule
    ]
})
export class PrimengModule {

}