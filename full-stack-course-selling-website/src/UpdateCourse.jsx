import { TextField, Box, Button, Card, Typography } from "@mui/material";

function UpdateCourse() {
  return (
    <>
      <center>
        <div style={{ paddingTop: "20px" }}>
          <Card
            sx={{ maxWidth: 445, boxShadow: 10 }}
            style={{ paddingBottom: "20px" }}
          >
            <div style={{ paddingTop: "10px" }}>
              <Typography style={{ fontWeight: "bolder", fontSize: "30px" }}>
                Update Course Form
              </Typography>
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                padding: "20px",
              }}
            >
              <form>
                <TextField
                  fullWidth={true}
                  label="Title"
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth={true}
                  label="Description"
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth={true}
                  label="Image Link"
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth={true}
                  label="Price"
                  required
                  margin="normal"
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: "16px" }}
                >
                  Update Course
                </Button>
              </form>
            </Box>
          </Card>
        </div>
      </center>
    </>
  );
}

export default UpdateCourse;
