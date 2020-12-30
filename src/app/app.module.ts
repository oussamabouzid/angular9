import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecetteComponent } from './recette/recette.component';
import { RecetteListComponent } from './recette/recette-list/recette-list.component';
import { RecetteDetailsComponent } from './recette/recette-details/recette-details.component';
import { RecetteElementComponent } from './recette/recette-list/recette-element/recette-element.component';
import { PanierComponent } from './panier/panier.component';
import { PanierEditComponent } from './panier/panier-edit/panier-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetteComponent,
    RecetteListComponent,
    RecetteDetailsComponent,
    RecetteElementComponent,
    PanierComponent,
    PanierEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
