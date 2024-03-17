import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'article',
    loadComponent: () => import('./article/article.page').then( m => m.ArticlePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'gal-images',
    loadComponent: () => import('./gal-images/gal-images.page').then( m => m.GalImagesPage)
  },
  {
    path: 'date-imp',
    loadComponent: () => import('./date-imp/date-imp.page').then( m => m.DateImpPage)
  },
  {
    path: 'info-contact',
    loadComponent: () => import('./info-contact/info-contact.page').then( m => m.InfoContactPage)
  },  {
    path: 'favorite-post',
    loadComponent: () => import('./favorite-post/favorite-post.page').then( m => m.FavoritePostPage)
  },

];
