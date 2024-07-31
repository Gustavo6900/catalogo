// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.
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

  return (
    <div>
        <h1>Loja</h1>
        {
          listaProdutos.map ((produto) => 
          <div key = {produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
            <button onClick={() => adicionarItemPedidos(produtos)}>Selecionar</button>
          </div>)
        }
        {
          listaPedidos.map((produto) => 
          <div key = {produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>

          </div>)
        }
    </div>
   
  );
}