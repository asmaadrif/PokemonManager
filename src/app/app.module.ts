import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './Composants/generations/generations.component';
import { PokemonsComponent } from './Composants/pokemons/pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
