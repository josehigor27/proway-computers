import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./modules/produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: "",redirectTo:"produtos", pathMatch:"full"},
  { path: 'carrinho', loadChildren: () => import('./modules/carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./modules/contato/contato.module').then(m => m.ContatoModule) },
  { path:"**",component:NaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
