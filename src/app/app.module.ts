import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage, ClimbDetailsPage, CragDetailsPage, LocationPage } from '../pages/pages';
import { DataService, MapService, ConnectionService  } from '../providers/providers';

@NgModule({
  declarations: [
    MyApp,
    HomePage, ClimbDetailsPage, CragDetailsPage, LocationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, ClimbDetailsPage, CragDetailsPage, LocationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},DataService, MapService, ConnectionService]
})
export class AppModule {}
