import { PlayLessonRounded } from '@mui/icons-material';
import { CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-materialize';
import { Link } from 'react-router-dom';

export default function GetAPI() {
  const [APIData, setAPIData] = useState([]);
  const [selected, setSelected] = useState("");
  const baseURL = `https://63fd532a859df29986cd4969.mockapi.io/api/test/Players`;

  useEffect(() => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error.message));
  }, []);
  const handleDetailClick = (data) => {
    setSelected(data.id);
    console.log(selected);
  };
  return (
    <Grid container spacing={2}>
      {APIData.map((data) => (
        <Grid item md={4} key={data.id}>
          <Card>
            <CardMedia component="img" height="240" image={data.img} alt={data.name} />
            <CardContent>
              <Typography gutterBottom variant="h5" className='font-bold' component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.club}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">{data.nation}</Button>
              <Link to={`/detail/${data.id}`} className="mx-4"> 
                <Button size="small" >Detail</Button>
                
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
