import { Button, Card, CardActions, CardContent, Grid, Typography, Box, CardMedia } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Dummy data
  const datas = [
    {
      id: 1,
      title: 'Navigation',
      img_url: 'https://thumbs.dreamstime.com/b/road-gps-navigation-city-map-car-street-highway-roadmap-infographics-stock-vector-156915584.jpg',
      EmpName: 'Navigation',
      designation: 'Navigate through the app',
      empId: 'NAV001'
    },
    {
      id: 2,
      title: 'Food',
      img_url: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg',
      EmpName: 'Food',
      designation: 'Explore food options',
      empId: 'FOOD002'
    }
  ];

  const updateData = (data) => {
    // Navigate to the add/update page with the data's ID and data state
    navigate('/add', { state: { data } });
  };

  const deleteData = (_id) => {
    alert('Data deleted');
    // Here you would normally delete data from your backend
    // This is just a placeholder action
  };

  return (
    <Box sx={{ width: '100%', padding: '2%' }}>
      <Grid container spacing={3} justifyContent="center">
        {datas.map((data) => (
          <Grid item xs={12} sm={6} md={4} key={data.id}>
            <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="240"
                image={data.img_url}
                alt={data.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {data.EmpName}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {data.designation}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant='contained' sx={{ backgroundColor: "#d500f9" }} onClick={() => updateData(data)}>Explore</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
