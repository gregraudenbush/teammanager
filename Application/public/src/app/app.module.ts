import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UserService} from "./user.service";
import { AppRoutingModule } from './routing.module'; 
import { AppComponent } from './app.component';
import { PlayerlistComponent } from './manage/playerlist/playerlist.component';
import { AddComponent } from './manage/add/add.component';
import { StatusComponent } from './status/status.component';
import { Game1Component } from './status/game1/game1.component';
import { Game2Component } from './status/game2/game2.component';
import { Game3Component } from './status/game3/game3.component';
import { ManageComponent } from './manage/manage.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PlayerlistComponent,
    AddComponent,
    StatusComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
