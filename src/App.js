import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import UILink from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import "./App.css";

/** Views */
import { Discover } from "./views/discover/Discover";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography
              align="left"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Expedition to Mars
            </Typography>
            <nav></nav>
          </Toolbar>
        </AppBar>
        {/* Hero unit */}

        <img
          alt="Mars"
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
          src="https://images.news18.com/ibnlive/uploads/2021/08/1627902340_mars-new-images-1600x900.jpg"
        />
        <Container
          disableGutters
          style={{ minHeight: "calc(100vh - 150px)" }}
          maxWidth="md"
          component="main"
          sx={{ pt: 2, pb: 6 }}
        >
          <Routes>
            <Route path="/Expedition-to-Mars" element={<Discover />} />
          </Routes>
        </Container>
        {/* Footer */}
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            py: 4,
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <UILink color="inherit" href="https://mui.com/">
              Your Website
            </UILink>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
        {/* End footer */}
      </React.Fragment>
    </div>
  );
}

export default App;
