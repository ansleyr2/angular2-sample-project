import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
//import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { SaveWordComponent } from './save-word/save-word.component';
//import { RepoListComponent } from './github/repo-list/repo-list.component';
//import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import { WordListComponent } from './word-list/word-list.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'word-list', component: WordListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'save-word', component: SaveWordComponent/*,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]*/
  },
  { path: 'contact', component: ContactComponent }
];

