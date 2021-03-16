import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'myentity',
    loadChildren: () => import('./myentity/myentity.module').then( m => m.MyentityPageModule)
  },
  {
    path: 'north-ws',
    loadChildren: () => import('./north-ws/north-ws.module').then( m => m.NorthWSPageModule)
  },
  {
    path: 'south-ws',
    loadChildren: () => import('./south-ws/south-ws.module').then( m => m.SouthWSPageModule)
  },
  {
    path: 'east-ws',
    loadChildren: () => import('./east-ws/east-ws.module').then( m => m.EastWSPageModule)
  },
  {
    path: 'west-ws',
    loadChildren: () => import('./west-ws/west-ws.module').then( m => m.WestWSPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
