import { NextPage } from 'next';
import { GistList } from 'src/components/gistList';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Grid from '@material-ui/core/Grid/Grid';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import { Container, CssBaseline } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { setDate } from 'src/redux/slices/gists';
// import Button from '@material-ui/core/Button';

export interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = () => {
 
  const dispatch = useDispatch();
  const errorState = useSelector((state => state.gists));
  
  function setInputDate(e) {      
    dispatch(setDate(e.target.value)) 
  }

  // function getOrganisations() {
  //   dispatch(getOrganisations())
  // }

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Test Task
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <div style={{ padding: 24 }}>
          <Grid container spacing={6} direction="column">
            <section>
              <Typography variant="h2">Gists</Typography>
              <TextField onChange={setInputDate} style={{margin: "10px"}} id="standard-basic" type="date"/>
              {/* <Button onClick={getOrganisations} variant="contained" color="primary">Show organisation</Button> */}
              { errorState.error ? <h1 style={{fontSize: "50px", textAlign: "center"}}>{errorState.error}</h1> : <GistList /> }
            </section>
          </Grid>
        </div>
      </Container>
    </>
  );
};


export default Dashboard;
