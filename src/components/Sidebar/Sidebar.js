import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Sidebar(props) {
  const { subTitle, subDescription, description, social, title, data } = props;
  const [city, setCity] = React.useState('');
  const [cigg, setCigg] = React.useState('');

  const handleChange = (e, opt) => {
    setCity(e.target.value);
    setCigg(data[`compare-tabs_1_city_${opt.key.substring(2)}_cigg`]);
  };

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <FormControl fullWidth sx={{ mt: 3, mb: 3 }}>
          <InputLabel id="select-city-label">
            {data['compare-tabs_1_title']}
          </InputLabel>
          <Select
            labelId="select-city-label"
            id="demo-simple-select"
            value={city}
            label={data['compare-tabs_1_title']}
            onChange={handleChange}
          >
            {Array.from(Array(32).keys()).map((val, index) => {
              if (data[`compare-tabs_1_city_${index + 1}_name`]) {
                return (
                  <MenuItem
                    value={data[`compare-tabs_1_city_${index + 1}_aqi`]}
                    key={`${index + 1}`}
                  >
                    {data[`compare-tabs_1_city_${index + 1}_name`]}
                  </MenuItem>
                );
              }
            })}
          </Select>
        </FormControl>
        <Typography>{city && `${cigg} => ${city}`}</Typography>

        <Typography variant="h6" gutterBottom>
          {subTitle}
        </Typography>
        <Typography>{subDescription}</Typography>
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  subDescription: PropTypes.string.isRequired,
  data: PropTypes.objectOf(String).isRequired,
};

export default Sidebar;
