import { NgModule } from '@angular/core';

import { NewExtractComponent } from './new-extract/new-extract.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'extracts', pathMatch: 'full' },
  { path: 'extracts', component: NewExtractComponent },
  { path: 'transfer', component: NewTransferComponent },
  { path: 'edit/:id', component: NewTransferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
