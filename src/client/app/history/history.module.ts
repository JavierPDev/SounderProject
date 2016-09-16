import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { HistoryComponent } from './history.component';

@NgModule({
  imports: [CommonModule, RouterModule, MomentModule],
  declarations: [HistoryComponent],
  exports: [HistoryComponent]
})
export class HistoryModule { }
