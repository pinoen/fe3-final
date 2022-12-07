import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

const Home = () => {

  const [dentists, setDentist] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setDentist(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(dentists)

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
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