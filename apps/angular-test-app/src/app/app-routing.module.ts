import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { ScrollToTopModule } from '@ffdc/uxg-angular-components/scroll-to-top';
import { UxgTableModule } from '@ffdc/uxg-angular-components/table';
import { PopoverModule } from '@ffdc/uxg-angular-components/popover';

import { routes } from './routes';
import { MaterialModule } from './material.module';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { HomeComponent } from './components/home/home.component';
import { PopoverDemoComponent } from './components/popover-demo/popover-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    GlobalSearchModule,
    ScrollToTopModule,
    PopoverModule,
    UxgTableModule
  ],
  declarations: [HomeComponent, GlobalSearchDemoComponent, TableDemoComponent, PopoverDemoComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
