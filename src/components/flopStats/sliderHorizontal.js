import React, { useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
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

  return <>
    <div className={classes.root}>
      <Slider
        orientation="horizontal"
        onChange={handleSliderChange}
        value={typeof sliderValue === 'number' ? sliderValue : 0}
        defaultValue={sliderValue}
        track='normal'
        aria-labelledby="horizontal-slider"
        marks={marks}
      />
    </div>
    <span>{`${sliderValue}%`}</span>
  </>;
}
