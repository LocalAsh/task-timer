import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { TimerhistoryComponent } from './timerhistory/timerhistory.component';


const routes: Routes = [
  { path: 'timer', component: TimerControlComponent },
  { path: 'history', component: TimerhistoryComponent },
  { path: '', redirectTo: 'timer', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
