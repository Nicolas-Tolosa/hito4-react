import { useState } from 'react'
import { useEffect } from 'react'
import CardPizza from './components/CardPizza'
import Header from './components/Header'

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data)
      })
  }, [])

  return (
    <>
      <Header />
      <div>
        {pizzas.map((pizza) => {
          return <CardPizza {...pizza} key={pizza.id} />
        })}
      </div>
    </>
  )
}

export default Home