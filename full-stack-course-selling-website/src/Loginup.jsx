import {
  TextField,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  OutlinedInput,
  Typography,
} from "@mui/material";

function Loginup() {
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
                Login/Singup Form
              </Typography>
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              <form>
                <TextField
                  type="email"
                  label="Email"
                  required
                  margin="normal"
                />
                <TextField
                  type="password"
                  label="Password"
                  required
                  margin="normal"
                />
                <div>
                  <FormControl sx={{ minWidth: "245px", marginTop: "16px" }}>
                    <InputLabel id="role-label" required>
                      Signup as
                    </InputLabel>
                    <Select
                      input={<OutlinedInput label="Signup as" />}
                      labelId="role-label"
                      id="role-select"
                      required
                    >
                      <MenuItem value="user">User</MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: "16px" }}
                >
                  Sign In
                </Button>
              </form>
            </Box>
          </Card>
        </div>
      </center>
    </>
  );
}

export default Loginup;
