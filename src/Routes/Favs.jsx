import { Button } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import Swal from 'sweetalert2'

const Favs = () => {

  let favourites = JSON.parse(localStorage.getItem('favs'))

  const navigate = useNavigate()

  const handleClear = () => {
    Swal.fire({
      title: 'Are you sure to clean up your favs list?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clean up'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cleaned!',
          'You favs list have been cleaned',
          'success'
        )
        localStorage.removeItem('favs')
        navigate("/destacados")
      }
    })
  }

  return (
    <>
      <Box>
        <h1 className="favs-container">Dentists Favs</h1>
        <Button startIcon={<DeleteIcon />} sx={{ marginLeft: '20px' }} color="primary" size="large" variant="contained" onClick={handleClear}>Clear favs</Button>
      </Box>

      {<div className="card-grid">
        {favourites && favourites.map(dentist =>
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        )}
      </div>}
    </>
  );
};

export default Favs;
