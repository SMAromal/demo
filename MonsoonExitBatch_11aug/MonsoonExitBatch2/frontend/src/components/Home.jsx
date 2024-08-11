import { Button, Card, CardActions, CardContent, Grid, Typography, Box, CardMedia } from '@mui/material';
import { purple } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [datas, setData] = useState([]);
    var navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/get').then((res) => {
            console.log(res);
            setData(res.data);
        });
    }, []);

    const updateData = (data) => {
      // Navigate to the add/update page with the data's ID and data state
      navigate('/add', { state: { data } });
  };
  

    function deleteData(_id){
      axios.delete("http://localhost:3001/del/"+_id).then((res)=>{
        alert('Data deleted')
        // to automatically reload site
        window.location.reload()
      }).catch((error)=>{
        console.log(error)
      })
    }

    return (
        <Box sx={{ width: '95%', padding: '2%' }}>
            <Grid container spacing={3}>
                {datas.map((data, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
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
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {data.empId}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }} >
                                <Button variant='contained' sx={{backgroundColor:"#d500f9"}} onClick={() => updateData(data)}>Update</Button>
                                <Button variant='contained' sx={{backgroundColor:"#d500f9"}} onClick= {()=>deleteData(data._id)}>Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Home;
