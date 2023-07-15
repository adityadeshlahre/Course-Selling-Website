import { Card, Typography } from "@mui/material";
import Cards from "./Cards";
import Cards1 from "./Cards1";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <Card style={{ borderRadius: "40px" }}>
            <img
              src="https://picsum.photos/600/300?grayscale"
              srcSet="https://picsum.photos/600/300?grayscale"
              alt="Banner Image"
            />
            <Typography style={{ fontSize: "30px", textAlign: "center" }}>
              Banner
            </Typography>
          </Card>
        </div>
        <div>
          <Typography
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "30px",
              padding: "5px",
            }}
          >
            Free Learning
          </Typography>
          <Cards />
          <br />
          <Typography
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "35px",
              padding: "5px",
            }}
          >
            Featured Course
          </Typography>
          <Cards1 />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                borderRadius: "40px",
                maxWidth: "90%",
                background: "linear-gradient(to right, #e8ddfe, #e1b991)",
                padding: "20px",
              }}
            >
              <center>
                <h3>Welcome to Courses</h3>
              </center>
              <br />
              <strong>
                Discover endless learning opportunities on LearnHub. Explore
                diverse
              </strong>
              <br />
              <br />
              courses taught by industry experts. From technology to arts, we
              have it all. User-friendly interface for easy navigation.{" "}
              <strong>
                Enroll with afew clicks and choose flexible payment options.
              </strong>
              Engage with fellow learners through discussions and study groups.
              <br />
              <br />
              Earn certificates to enhance your professional profile.
              <strong>Start your learning journey with LearnHub today.</strong>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
