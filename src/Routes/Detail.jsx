import { Card, CardContent, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Components/utils/global.context'

const Detail = () => {

  const { data } = useContext(GlobalContext)
  let { id } = useParams()
  let info = data.find(dentist => dentist.id == id)

  return (
    <>
      <h1>Detail Dentist id </h1>
      <Card sx={{ minWidth: 275, display: 'flex', justifyContent: 'center', marginTop: '5rem', border: '1px solid grey' }}>
        <CardContent>
          <Typography variant="h4" component="div">
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
    </>
  )
}

export default Detail