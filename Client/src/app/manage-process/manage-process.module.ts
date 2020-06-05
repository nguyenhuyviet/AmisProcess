
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProcessComponent } from './manage-process.component';
import { ManageProcessRoutingModule } from './manage-process-routing.module';
import { ClarityModule } from '@clr/angular';
import { ListProcessComponent } from './list-process/list-process.component';
import { FormsModule } from '@angular/forms';
import { AddProcessComponent } from './list-process/add-process/add-process.component';
import { SearchListComponent } from '../common/search/search-list.component';
import { SelectComponent } from '../common/select/select.component';


@NgModule({
  declarations: [

   ManageProcessComponent,
  ListProcessComponent,
  AddProcessComponent,
  SearchListComponent,
  SelectComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    ManageProcessRoutingModule,
    
  ],
})
export class ManageProcessModule { }
