import { Card, CardContent, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [info, setInfo] = useState([])

  let { id } = useParams()

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setInfo(res.data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <>
      <h1>Detail Dentist id </h1>
      <Card sx={{ minWidth: 275, display: 'flex', justifyContent: 'center' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {info.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Full name
          </Typography>
          <Typography variant="body2">
            Dentist ID: {id}
          </Typography>
          <Typography variant="body2">
            Username: {info.username}
          </Typography>
          <Typography variant="body2">
            Address: {info.address.street} {info.address.suite} - {info.address.city}, {info.address.zipcode}
          </Typography>
          <Typography variant="body2">
            Phone: {info.phone}
          </Typography>
          <Typography variant="body2">
            Email: {info.email}
          </Typography>
          <Typography variant="body2">
            Website: {info.website}
          </Typography>
        </CardContent>
      </Card>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail