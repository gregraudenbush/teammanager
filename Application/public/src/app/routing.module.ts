import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayerlistComponent } from './manage/playerlist/playerlist.component';
import { AddComponent } from './manage/add/add.component';
import { StatusComponent } from './status/status.component';
import { Game1Component } from './status/game1/game1.component';
import { Game2Component } from './status/game2/game2.component';
import { Game3Component } from './status/game3/game3.component';
import { ManageComponent } from './manage/manage.component';
import {UserService} from "./user.service";
const routes: Routes = [
  
  { path: 'manage', component: AppComponent },
  { path: 'status', component: StatusComponent },
  { path: 'players/list', component: PlayerlistComponent },
  { path: 'status/game/1', component: Game1Component },
  { path: 'status/game/2', component: Game2Component },
  { path: 'status/game/3', component: Game3Component },
  { path: 'add', component: AddComponent },
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}