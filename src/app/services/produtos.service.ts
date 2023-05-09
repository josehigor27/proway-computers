import { Injectable } from '@angular/core';
import { IProduto, produtos } from '../produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    console.log(this.produtos.find(produto => produto.id = produtoId))
    return this.produtos.find(produto => produto.id = produtoId);
  }
}
