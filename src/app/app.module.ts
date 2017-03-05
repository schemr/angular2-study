import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './data-binding/property-binding.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './data-binding/event-binding.component';
import { TwoWayBindingComponent } from './data-binding/two-way-binding.component';
import { LifecycleComponent } from './lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
