import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AspectRatio, Button, Card, CardContent, Typography } from "@mui/joy/";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/courses/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCourses(res.data.courses);
      });
  }, []);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {courses.map((course) => {
        return <AllCourses course={course} />;
      })}
    </div>
  );
}

export function AllCourses({ course }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <Card variant="outlined" sx={{ width: 320 }}>
          <div>
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              {course.title}
            </Typography>
            <Typography level="body2">{course.description}</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img src={course.imageLink} />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body3">Total price:</Typography>
              <Typography fontSize="lg" fontWeight="lg">
                {course.price}
              </Typography>
            </div>
            <Button
              variant="solid"
              size="sm"
              color="primary"
              aria-label="Explore Bahamas Islands"
              sx={{ ml: "auto", fontWeight: 600 }}
              onClick={() => {
                navigate("/course/" + course._id);
              }}
            >
              Edit
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Courses;
