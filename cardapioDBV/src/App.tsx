import { useState } from 'react'
import './App.css'
import { Card } from './componets/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';

function App() {//aqui é a nossa aplicação

  const { data } = useFoodData(); //Aqui estou passando uma interface para padronizar a entrada 

  return (
    <div className='container'>
      <h1>Cardápio DBV</h1>
      <div className='card-grid'>
        {data?.map(foodData => //Com essa interrogação, se vim vázio ele não vai fazer isso para estourar erro
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
            type={foodData.type}
          />
        )}
      </div>
    </div>
  )
}

export default App
