import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessActionComponent } from './process-action.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import {  } from 'src/app/shared/directive/autofocus.directive';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProcessActionComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    ProcessActionComponent
  ]
})
export class ProcessActionModule { }
