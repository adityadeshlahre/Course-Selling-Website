import * as React from "react";
import { AspectRatio, Button, Card, CardContent, Typography } from "@mui/joy/";

function AllCourses() {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <Card variant="outlined" sx={{ width: 320 }}>
          <div>
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              Title Of Course
            </Typography>
            <Typography level="body2">Discription of the courses</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body3">Total price:</Typography>
              <Typography fontSize="lg" fontWeight="lg">
                price of course
              </Typography>
            </div>
            <Button
              variant="solid"
              size="sm"
              color="primary"
              aria-label="Explore Bahamas Islands"
              sx={{ ml: "auto", fontWeight: 600 }}
            >
              Edit
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default AllCourses;
