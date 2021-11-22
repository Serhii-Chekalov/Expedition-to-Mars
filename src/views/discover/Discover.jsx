import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import debounce from "lodash/debounce";

const defaultValues = {
  rover: "curiosity",
  camera: "CHEMCAM",
  sol: 100,
};

const RoverTypes = ["curiosity", "opportunity", "spirit"];
const CameraTypes = {
  FHAZ: ["curiosity", "opportunity", "spirit"],
  RHAZ: ["curiosity", "opportunity", "spirit"],
  MAST: ["curiosity"],
  CHEMCAM: ["curiosity"],
  MAHLI: ["curiosity"],
  MARDI: ["curiosity"],
  NAVCAM: ["curiosity", "opportunity", "spirit"],
  PANCAM: ["opportunity", "spirit"],
  MINITES: ["opportunity", "spirit"],
};

export function Discover() {
  const [roversData, setRoverData] = useState(null);
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSliderChange = debounce((e) => {
    setFormValues({
      ...formValues,
      sol: e.target.value,
    });
  }, 500);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const fetchRoverData = ({ rover, sol, camera }) => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=vlL5EdR9wnGc5QSO2c7qNDJtytJTxcZB2Jy4YRU5&page=1`
    )
      .then((response) => response.json())
      .then(({ photos }) => setRoverData(photos));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(formValues).every(Boolean)) {
      const { rover, sol, camera } = formValues;
      fetchRoverData({ rover, sol, camera });
    } else {
      alert("Form is not finished");
    }
  };

  useEffect(() => {
    const { rover, sol, camera } = formValues;
    fetchRoverData({ rover, sol, camera });
  }, []);

  return (
    <div>
      <Typography variant="h1" style={{ fontWeight: "bold" }}>
        Discover
      </Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item>
            <FormControl>
              <FormLabel>Type of Rover</FormLabel>
              <RadioGroup
                name="rover"
                value={formValues.rover}
                onChange={handleInputChange}
                row
              >
                {RoverTypes.map((rover, index) => (
                  <FormControlLabel
                    key={index}
                    value={rover}
                    control={<Radio size="small" />}
                    label={rover}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormLabel>Sol (day on Mars)</FormLabel>
            <Box width={300}>
              <Slider
                marks={[
                  {
                    value: 0,
                    label: "0",
                  },
                  {
                    value: 1000,
                    label: "1000",
                  },
                ]}
                min={0}
                max={1000}
                defaultValue={defaultValues.sol}
                onChange={handleSliderChange}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
          {formValues.rover && (
            <Grid item>
              <FormControl>
                <FormLabel>Type of Camera</FormLabel>
                <RadioGroup
                  name="camera"
                  value={formValues.camera}
                  onChange={handleInputChange}
                  row
                >
                  {Object.keys(CameraTypes)
                    .filter((key) =>
                      CameraTypes[key].includes(formValues.rover)
                    )
                    .map((camera, index) => (
                      <FormControlLabel
                        key={index}
                        value={camera}
                        control={<Radio size="small" />}
                        label={camera}
                      />
                    ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          )}
          <Grid item>{/* /// */}</Grid>
          <br />
          <Button variant="contained" color="primary" type="submit">
            Show results
          </Button>
        </Grid>
      </form>
      <br />
      <br />
      {roversData ? (
        roversData.length ? (
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {roversData.map((elem) => (
              <Grid item xs={12} sm={6} md={3} key={elem.id}>
                <Card>
                  <CardHeader
                    title={elem.id}
                    subheader={`Camera : ${elem.camera.name}`}
                  />
                  <CardContent>
                    <img
                      style={{ maxWidth: "100%" }}
                      src={elem.img_src}
                      alt=""
                      srcset=""
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography align="center" variant="h3">
            Not found
          </Typography>
        )
      ) : null}
    </div>
  );
}
