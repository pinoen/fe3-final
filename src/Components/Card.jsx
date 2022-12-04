import { Card, Button, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const DentistCard = ({ name, username, id }) => {

  const addFav = () => {

    const dentistData = {
      id: id,
      name: name,
      username: username
    }

    localStorage.setItem('favs', JSON.stringify(dentistData))
  }

  return (
    <div className="card">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
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
      </Card>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default DentistCard;
