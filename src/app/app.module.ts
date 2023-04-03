import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MemoryGamePageComponent } from './pages/memory-game-page/memory-game-page.component';
import { ImageComponent } from './shared/components/image/image.component';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './shared/components/card/card.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsErrorsComponent } from './shared/components/forms-errors/forms-errors.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    ContactPageComponent,
    HeaderComponent,
    FooterComponent,
    MemoryGamePageComponent,
    ImageComponent,
    CardComponent,
    GalleryComponent,
    FormsErrorsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
