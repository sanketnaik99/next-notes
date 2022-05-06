import { Add, Home } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Paper,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

const routes = ["/", "/counter", "/"];

const BottomNavbar = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  return (
    <Container
      sx={{
        position: "fixed",
        bottom: "0",
        padding: "0",
        zIndex: "50",
        left: "50%",
        transform: "translateX(-50%)",
        display: { xs: "block", sm: "none" },
      }}
      maxWidth="xl"
    >
      <Paper elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newvalue) => {
            setValue(newvalue);
            router.push(routes[newvalue]);
          }}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Counter" icon={<Add />} />
          <BottomNavigationAction label="Recents" icon={<Add />} />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default BottomNavbar;
