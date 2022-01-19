import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/alquran/index/index.component';
import { SurahComponent } from './components/alquran/surah/surah.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { routeName: 'home' } },
  { path: 'index', component: IndexComponent },
  { path: 'surah/:id', component: SurahComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
