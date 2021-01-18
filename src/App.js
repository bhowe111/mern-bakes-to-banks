import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import bakestobanks from "./images/bakes_to_banks_logo_no_bkg.png";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Bakes to Banks
        </Typography>
        <img src={bakestobanks} alt="bakes to banks" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
