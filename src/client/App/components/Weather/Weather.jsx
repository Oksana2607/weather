import React from 'react';

import {
  Table,
  TableCaption,
  TableBody,
  TableRow,
  TableH,
  TableD,
  TableHr
} from './styledComponents';

const Weather = (props) => {
  const {
    weather,
  } = props;

  const hasWeather = Object.keys(weather).length > 0;

  return (
    <>
      <Table>
        <TableCaption>RIGHT NOW</TableCaption>
        { hasWeather && (
        <TableBody>
          <TableRow>
            <TableH>Wind</TableH>
            <TableD>{weather.wind.speed}</TableD>
          </TableRow>
          <TableHr />
          <TableRow>
            <TableH>Humidity</TableH>
            <TableD><span>{weather.main.humidity}</span></TableD>
          </TableRow>
          <TableHr />
          <TableRow>
            <TableH>Pressure</TableH>
            <TableD>{weather.main.pressure}</TableD>
          </TableRow>
          <TableHr />
          <TableRow>
            <TableH>Visibility</TableH>
            <TableD>{weather.visibility}</TableD>
          </TableRow>
          <TableHr />
          <TableRow>
            <TableH>Min temp</TableH>
            <TableD>
              {weather.main.temp_min}
              <sup>°</sup>
            </TableD>
          </TableRow>
          <TableHr />
          <TableRow>
            <TableH>Max temp</TableH>
            <TableD>
              {weather.main.temp_max}
              <sup>°</sup>
            </TableD>
          </TableRow>
        </TableBody>
        ) }
      </Table>
    </>
  );
};

export default Weather;
