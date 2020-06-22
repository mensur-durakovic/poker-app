import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    height: 200,
  }
});

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 100,
    label: "100%",
  },
];

export default function VerticalSlider() {
  const classes = useStyles();
  const [sliderValue, setSliderValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <>
      <span>{`${sliderValue}%`}</span>
      <div className={classes.root}>
        <Slider
          className={classes.slider}
          id="#pokerVerticalSlider"
          orientation="vertical"
          onChange={handleSliderChange}
          track='normal'
          value={typeof sliderValue === 'number' ? sliderValue : 0}
          aria-labelledby="vertical-slider"
          marks={marks}
        />
      </div>
    </>
  );
}
