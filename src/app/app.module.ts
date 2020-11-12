import { AppComponent } from './app.component';
import { AppConfigModule } from './app-config/app-config.module';
import { AppConfigService } from './app-config.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultConfig } from './app-config/model/config';
import { NgModule } from '@angular/core';

const config: DefaultConfig = {
  id: '1',
  accessToken: '1234.-40440-,39404'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppConfigModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
