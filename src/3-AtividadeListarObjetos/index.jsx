// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.

import { useState } from "react";

export default function Home() {

 const [listaProdutos, setProdutos] = useState([
  {id: 1, nome: "produto1", preco: 20},
  {id: 2, nome: "produto2", preco: 40},
  {id: 3, nome: "produto3", preco: 60},
 ])

  return (
    <div>
        <h1>Loja</h1>
    </div>
   
  );
}

