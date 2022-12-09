import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import picture from '../images/doctor.jpg'
import Swal from 'sweetalert2'



const DentistCard = ({ name, username, id }) => {

  const addFav = () => {

    let dentistData = {
      id: id,
      name: name,
      username: username
    }

    if (localStorage.getItem('favs') == null) {
      localStorage.setItem('favs', '[]');
    }

    let data = JSON.parse(localStorage.getItem('favs'))
    data.push(dentistData)

    localStorage.setItem('favs', JSON.stringify(data))

    Swal.fire(
      'Added it!',
      `Dentist ${name} has been added to your fav list`,
      'success'
    )
  }

  return (
    <div className="card-grid">
      <Card className="card" sx={{ minWidth: 275 }}>
        <CardContent>
          <CardMedia
            component="img"
            alt="doctor"
            height="140"
            image={picture}
          />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Dentist ID: {id}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Full name
          </Typography>
          <Typography variant="body1">
            username: {username}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={`/dentist/${id}`}>See details</Link>
        </CardActions>
        <Button onClick={addFav} className="favButton">Add fav</Button>
      </Card>

    </div>
  );
};

export default DentistCard;
