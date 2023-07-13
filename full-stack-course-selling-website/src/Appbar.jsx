import { Typography, Grid, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import * as React from "react";

function Appbar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "2px solid black",
          paddingRight: "8px",
          paddingLeft: "4px",
        }}
        sx={{ boxShadow: "5px 10px #888888" }}
      >
        <div style={{ display: "flex" }}>
          <Grid item xs={1}>
            <SchoolIcon style={{ fontSize: "60px", paddingRight: "10px" }} />
          </Grid>
          <Typography
            style={{ paddingTop: "10px", fontSize: "30px", fontWeight: "bold" }}
          >
            Course Kro
          </Typography>
        </div>
        <div style={{ paddingTop: "8px" }}>
          <Button
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
              backgroundColor: "#21b6ae",
              textTransform: "none",
            }}
            variant="outlined"
          >
            Home
          </Button>
        </div>
      </div>
    </>
  );
}

export default Appbar;
