import { Typography, Grid, Avatar, Button, Box, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import * as React from "react";

function Appbar() {
  return (
    <>
      <Paper elevation={3}>
        <div style={{ padding: "20px", backgroundColor: "#eeeeee" }}>
          <Box sx={{ boxShadow: 10 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "2px solid black",
                paddingRight: "8px",
                paddingLeft: "4px",
                boxShadow: 3,
                backgroundColor: "white",
              }}
            >
              <div style={{ display: "flex" }}>
                <Grid item xs={1}>
                  <SchoolIcon
                    style={{
                      color: "#00aaff",
                      fontSize: "60px",
                      paddingRight: "10px",
                    }}
                  />
                </Grid>
                <Typography
                  style={{
                    paddingTop: "10px",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Courses
                </Typography>
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                <div style={{ paddingTop: "8px" }}>
                  <Button
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                      textTransform: "none",
                    }}
                    variant="outlined"
                  >
                    All Courses
                  </Button>
                </div>
                <div style={{ paddingTop: "8px" }}>
                  <Button
                    style={{
                      fontSize: "19px",
                      fontWeight: "bold",
                      color: "white",
                      textTransform: "none",
                      backgroundColor: "#db047b",
                    }}
                    variant="contained"
                  >
                    Buy Now
                  </Button>
                </div>
                <div style={{ paddingTop: "5px" }}>
                  <Avatar
                    sx={{ width: 50, height: 50 }}
                    alt="Cananon"
                    src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png"
                  />
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Paper>
    </>
  );
}

export default Appbar;
