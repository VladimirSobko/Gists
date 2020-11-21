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
import  { setNewDate }  from '../redux/slices/gists/index';


export interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = () => {

  // const [ date, setDate ] = useState("");
  const dispatch = useDispatch();
 
  function setInputDate(e) {  
    setNewDate.payload = e.target.value;  
    console.log(setNewDate.payload);
    dispatch(setNewDate) 
  }

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
              <TextField onChange={setInputDate} style={{margin: "10px"}} id="standard-basic"  type="date" />
              <GistList />
            </section>
          </Grid>
        </div>
      </Container>
    </>
  );
};

// const loadingStatus = useSelector((state) => state.dev.loading);
// const errorStatus = useSelector((state) => state.dev.error);
// return (
//   <>
//     {loadingStatus ? <CircularProgress /> : ""}
//     {errorStatus ? <h3>{errorStatus}</h3> : ""}

export default Dashboard;
