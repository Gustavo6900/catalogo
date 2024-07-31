// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`
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
          </div>)
        }
    </div>
   
  );
}

