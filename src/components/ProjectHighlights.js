import React from "react";
import Slider from "react-slick";
import './ProjectHighlights.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ProjectData } from "./ProjectHighlightsData";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function Projects() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="Project-Slider">
      <h1>Projects</h1>
      <div className="dividor"></div>
      <Slider {...settings}>
        {/* {ProjectData.map((item) => (
          <div className="Project-Card">
              <div className="Card-image"><img src={item.linkImg}/></div>
              <h2>{item.title}</h2>
              <div className="Card-Description">
                {item.Description}
            </div>
          </div>
        ))} */}
        {ProjectData.map((item) => (
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              sx={{ height: 500 }}
              image={item.linkImg}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item.Description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </div>
  );
}
export default Projects;