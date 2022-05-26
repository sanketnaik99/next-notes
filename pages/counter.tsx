import { Button, Grid, IconButton, Paper, Stack } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./_app";
import { Add, Remove } from "@mui/icons-material";
import { decrement, increment } from "../redux/modules/counter";

// Using Emotion Styled Component to add custom style to h1 tag.
const CustomTitle = styled.h1`
  color: #212121;
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin-top: 50px;
`;

const Count = styled.h1`
  color: #424242;
  font-weight: bold;
  padding: 20px 60px;
  font-size: 80px;
  font-family: "Open Sans";
`;

const Counter: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container direction="row" justifyContent="center">
        <Grid item xs={12}>
          <Stack spacing={5} alignItems="center">
            <CustomTitle data-cy="counter-page-title">Counter</CustomTitle>
          </Stack>
        </Grid>
        <Grid item marginTop={10}>
          <Paper
            variant="outlined"
            sx={{ padding: "5x 0px", backgroundColor: "#b3e5fc" }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={0}
            >
              <IconButton
                aria-label="Decrement"
                className="decrement"
                sx={{ marginX: "20px" }}
                onClick={() => dispatch(decrement())}
                data-cy="decrement-button"
              >
                <Remove sx={{ fontSize: "50px", color: "#0277bd" }} />
              </IconButton>
              <Paper variant="outlined" square>
                <Count className="counter" data-cy="count">
                  {count}
                </Count>
              </Paper>
              <IconButton
                aria-label="Increment"
                className="increment"
                sx={{ marginX: "20px" }}
                onClick={() => dispatch(increment())}
                data-cy="increment-button"
              >
                <Add sx={{ fontSize: "50px", color: "#0277bd" }} />
              </IconButton>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Counter;
