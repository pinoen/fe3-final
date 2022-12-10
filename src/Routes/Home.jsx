import React, { useContext } from 'react'
import Card from '../Components/Card'
import { GlobalContext } from '../Components/utils/global.context'

const Home = () => {

  const { data } = useContext(GlobalContext)

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map(dentist => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  )
}

export default Home