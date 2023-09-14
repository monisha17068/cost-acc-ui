import React from 'react';
import { Grid, Card, Typography, CardMedia, CardContent } from '@mui/material';
import Ebs from '../cloud-tools/Ebs';
import { CloudToolsIconData } from '../cloud-tools/CloudToolsIconData';
import { useNavigate } from 'react-router';
const Dashboard = () => {
  //path for cards
  const navigate = useNavigate();

  //route path
  const handleUrlClick = (path) => {
    alert('Please hold on for a moment while we prepare your data for display');
    navigate(path);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <Grid container spacing={3}>
          {CloudToolsIconData.map((data) => (
            <Grid key={data.id} item lg={6} md={6} xs={12}>
              <Card
                onClick={() => handleUrlClick(data.path)}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  padding: '10%',
                  cursor: 'pointer',
                  textAlign: 'center',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  color: 'navy',
                  // background: 'radial-gradient(circle, rgba(31,31,31,0.5466561624649859) 0%, rgba(60,149,255,0.23573179271708689) 90%)', //one
                  background: '#fff',
                  '&:hover': {
                    color: 'black',
                    // background:'radial-gradient(circle, rgba(31,31,31,0.5466561624649859) 0%, rgba(60,241,255,0.23573179271708689) 90%)',
                    // background: '#fff',
                    transition: 'transform 0.2s',
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <CardContent>
                  <CardMedia
                    component="img"
                    style={{
                      width: '100%',
                      height: '100%'
                    }}
                    image={data.imgPath}
                    alt={data.altname}
                  />
                </CardContent>
                <Typography variant="h3"> {data.name}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <Grid item lg={6} md={6} xs={12}>
          {' '}
          <Ebs />
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
