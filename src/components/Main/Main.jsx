import * as React from 'react';

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Menu from "../Menu/Menu";
import BarraNavegacion from '../BarraNavegacion/BarraNavegacion';

const Main = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
        <BarraNavegacion/>
      <Grid container spacing={2}>
      
        <Grid item xs={6} md={4}>
          <Item><BarraNavegacion/></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item><Menu/></Item>
        </Grid>
      </Grid>
    </>
  );
};
export default Main