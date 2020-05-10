import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { AgmExampleComponent } from './agm-example/agm-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatListModule, MatCardModule, MatChipsModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AgmExampleComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.maps_api_key,
      libraries: ['places', 'drawing', 'geometry']
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
