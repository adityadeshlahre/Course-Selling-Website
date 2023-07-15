import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material/";
import AspectRatio from "@mui/joy/AspectRatio";

function Cards1() {
  return (
    <>
      <center>
        <Card
          variant="outlined"
          sx={{ width: 300 }}
          style={{ paddingBottom: "20px", borderRadius: "40px" }}
        >
          <AspectRatio ratio={16 / 9}>
            <div>
              <img
                src="https://picsum.photos/200/300"
                srcSet="https://picsum.photos/200/300"
                alt="A beautiful landscape."
              />
            </div>
          </AspectRatio>
          <div>
            <Typography variant="h3" fontSize="30px">
              Title
            </Typography>
            <Typography level="body2">Description of the card.</Typography>
          </div>
          <Button
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
              textTransform: "none",
              backgroundColor: "#00aagg",
              borderRadius: "20px",
            }}
            variant="contained"
          >
            Purchase
          </Button>
        </Card>
      </center>
    </>
  );
}

export default Cards1;
