import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { MatDividerModule } from '@angular/material/divider';
import { CardsComponent } from './components/cards/cards.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgFor } from '@angular/common';
import { DuvidasComponent } from './components/duvidas/duvidas.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatMenuModule } from '@angular/material/menu';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    DuvidasComponent,
    FooterComponent,
    ToolbarComponent,
    LoginComponent,
    CadastroComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    CdkAccordionModule,
    NgFor,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
