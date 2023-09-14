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

const CloudTools = () => {
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

  const [showTable, setShowTable] = useState(false);

  const handleShowTable = () => {
    setShowTable(true);
  };
  return (
    <>
    <h1>New Comp</h1>
      <Grid container spacing={3}>
        <Card
          style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
          sx={{
            cursor: 'pointer',
            borderRadius: '10px',
            background: 'lavender',
            color: 'navy',
            display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '10%',
                textAlign: 'center',
                width: '100%',
                height: '100%',
                
          }}
        >
          {showTable ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Bucket </TableCell>
                    <TableCell align="right">Total Storage Size Bytes</TableCell>
                    <TableCell align="right">Last Modified Date</TableCell>
                    <TableCell align="right">Storage Class</TableCell>
                    <TableCell align="right">Object Count</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {aws.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="right">{row.Bucket}</TableCell>
                      <TableCell align="right">{row['Total Storage Size (Bytes)']}</TableCell>
                      <TableCell align="right">{row['Last Modified Date']}</TableCell>
                      <TableCell align="right">{row['Storage Class']}</TableCell>
                      <TableCell align="right">{row['Object Count']}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <button onClick={handleShowTable}>AWS</button>
          )}
        </Card>
      </Grid>
    </>
  );
};

export default CloudTools;
