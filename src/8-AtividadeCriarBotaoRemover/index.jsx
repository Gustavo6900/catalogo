// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".

import { useState } from "react";

export default function Home() {

 const [listaProdutos, setProdutos] = useState([
  {id: 1, nome: "produto1", preco: 20},
  {id: 2, nome: "produto2", preco: 40},
  {id: 3, nome: "produto3", preco: 60},
 ])

 const [listaPedidos, setListaPedidos] = useState([])

 const adicionarItemPedidos = (objeto) => {
  setListaPedidos([...listaPedidos, objeto])
 }

 const removerItemPedidos = (id) =>{
  let remover = false
  let listaAux = listaPedidos.filter((produto) => {
    if( remover == false ){
      if(id !== id ) {
        return produto
      }
       else{
        remover == true
        return null
      }
    }
    else{
      return produto
    }
  }
  )
 }

  return (
    <div>
        <h1>Loja</h1>
        {
          listaProdutos.map ((produto) => 
          <div key = {produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
            <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
          </div>)
        }
        {
          listaPedidos.map((produto) => 
          <div key = {produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
            <button onClick={() => removerItemPedidos(produto.id)}>Remover</button>
          </div>)
        }
    </div>
   
  );
}