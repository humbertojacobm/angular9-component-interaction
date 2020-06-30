import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    NameChildComponent,
    NameParentComponent,
    VersionParentComponent,
    VersionChildComponent,
    CountdownTimerComponent,
    CountdownParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
