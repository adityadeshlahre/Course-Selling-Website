import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material/";

function Cards() {
  return (
    <>
      <center>
        <Card sx={{ maxWidth: 345 }} style={{ paddingBottom: "20px" }}>
          <CardMedia
            component="img"
            height="140"
            image="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Loram
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              voluptatibus molestiae impedit est, ipsa perspiciatis et
              repudiandae ea provident. Vitae fugit praesentium sit
            </Typography>
          </CardContent>
          <Button
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
              textTransform: "none",
              backgroundColor: "#00aagg",
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

export default Cards;
