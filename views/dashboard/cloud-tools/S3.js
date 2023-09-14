import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';

const S3 = () => {
  const [aws, setAws] = useState([]);

  useEffect(() => {
    const RespectedURL = 'http://44.200.196.48:8088/api/s3-detail-data/';
    Axios.get(RespectedURL)
      .then((response) => {
        console.log(response.data);
        setAws(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Card
          style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
          sx={{
            margin: '30px 5px 0px 25px',
            cursor: 'pointer',
            textAlign: 'center',
            width: '100%',
            height: '100%',
            borderRadius: '10px',
        
            
          }}
        >
          <TableContainer component={Paper}>
            <Table
             sx={{
                cursor: 'pointer',
                textAlign: 'center',
                width: '100%',
                tableLayout: 'fixed' 
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Bucket Name</TableCell>
                  <TableCell align="left">Total Storage Size Bytes</TableCell>
                  <TableCell align="left">Last Modified Date</TableCell>
                  <TableCell align="left">Storage Class</TableCell>
                  <TableCell align="left">Object Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {aws.map((row) => (
                  <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">{row.Bucket}</TableCell>
                    <TableCell align="left">{row['Total Storage Size (Bytes)']}</TableCell>
                    <TableCell align="left">{row['Last Modified Date']}</TableCell>
                    <TableCell align="left">{row['Storage Class']}</TableCell>
                    <TableCell align="left">{row['Object Count']}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </>
  );
};

export default S3;



