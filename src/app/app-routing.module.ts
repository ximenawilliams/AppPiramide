import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'hortaliza',
    loadChildren: () => import('./hortaliza/hortaliza.module').then( m => m.HortalizaPageModule)
  },
  {
    path: 'frutas',
    loadChildren: () => import('./frutas/frutas.module').then( m => m.FrutasPageModule)
  },
  {
    path: 'cereales',
    loadChildren: () => import('./cereales/cereales.module').then( m => m.CerealesPageModule)
  },
  {
    path: 'desayuno',
    loadChildren: () => import('./desayuno/desayuno.module').then( m => m.DesayunoPageModule)
  },
  {
    path: 'almuerzo',
    loadChildren: () => import('./almuerzo/almuerzo.module').then( m => m.AlmuerzoPageModule)
  },
  {
    path: 'cena',
    loadChildren: () => import('./cena/cena.module').then( m => m.CenaPageModule)
  },
  {
    path: 'picadas',
    loadChildren: () => import('./picadas/picadas.module').then( m => m.PicadasPageModule)
  },
  {
    path: 'snack',
    loadChildren: () => import('./snack/snack.module').then( m => m.SnackPageModule)
  },
  {
    path: 'menu-alimentos',
    loadChildren: () => import('./menu-alimentos/menu-alimentos.module').then( m => m.MenuAlimentosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
