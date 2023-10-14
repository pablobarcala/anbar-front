import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [
    MatDialogModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
