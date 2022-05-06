import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const pages = [
  { link: "/", title: "Home" },
  { link: "/counter", title: "Counter" },
];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ margin: { xs: "auto" } }}
          >
            Next Notes
          </Typography>
          <Box flexGrow={1} sx={{ display: { xs: "none", sm: "flex" } }}></Box>
          <Box flexGrow={0} sx={{ display: { xs: "none", sm: "flex" } }}>
            <Stack direction="row" spacing={3}>
              {pages.map((page) => (
                <Link href={page.link} key={page.link}>
                  <Button variant="text" sx={{ color: "#ffffff" }}>
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
