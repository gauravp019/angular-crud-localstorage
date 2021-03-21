import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTabComponent } from './input-tab/input-tab.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'home', component: HomeTabComponent },
  { path: 'add', component: InputTabComponent },
  { path: 'edit/:id', component: InputTabComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    InputTabComponent,
    HomeTabComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
