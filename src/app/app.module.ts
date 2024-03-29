import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/alquran/index/index.component';
import { SurahComponent } from './components/alquran/surah/surah.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BasicHighlightDirective } from './directives/basic.highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { SearchComponent } from './components/alquran/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SurahComponent,
    HeaderComponent,
    FooterComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HomeComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
