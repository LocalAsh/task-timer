import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { TimerComponent } from './timer/timer.component';
import { TwoDigitsPipe } from './pipes/two-digits.pipe';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SaveTimerComponent } from './save-timer/save-timer.component';
import { TimerhistoryComponent } from './timerhistory/timerhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerControlComponent,
    TimerComponent,
    TwoDigitsPipe,
    SaveTimerComponent,
    TimerhistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NoopAnimationsModule,
  ],
  entryComponents: [
    SaveTimerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
