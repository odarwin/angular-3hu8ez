import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './index/main/main.component';
import { NosotrosComponent } from './secundarias/nosotros/nosotros.component';

import { Routes, RouterModule ,} from '@angular/router';
const rutas: Routes = [
 { path: '', component: MainComponent },
 { path: 'nosotros', component: NosotrosComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule ,RouterModule.forRoot(rutas)],
  declarations: [AppComponent, NavComponent, FooterComponent, MainComponent, NosotrosComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
