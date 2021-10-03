import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RankingComponent } from './ranking/ranking.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { VoteButtonsComponent } from './vote-buttons/vote-buttons.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingComponent,
    FormComponent,
    ButtonComponent,
    VoteButtonsComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule, FormsModule, CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
