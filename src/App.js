import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import ProgressBar from './components/ProgressBar';

import { fetchData, setBarValue } from './actions';

export const App = props => {
  const { bars, buttons, limit } = props;

  const [selectedBar, setSelectedBar] = useState(0);

  useEffect(
    () => {
      props.fetchData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const hasData = Boolean(bars && buttons && limit);

  return (
    <Container fixed>
      {hasData && (
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3">Progress Bar Demo</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">{`Limit ${limit}%`}</Typography>
          </Grid>
          {bars.map((bar, index) => (
            <Grid key={index} item xs={12}>
              {`#${index + 1}`} <ProgressBar bar={bar} limit={limit} />{' '}
              <span
                data-testid={`progress-bar-${index + 1}-value`}
              >{`${bar}%`}</span>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Select
              native
              name="select"
              id="select"
              onChange={e => setSelectedBar(e.target.value)}
              data-testid="select"
            >
              {bars.map((bar, index) => (
                <option key={index} value={index}>
                  Progress Bar {index + 1}
                </option>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup>
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => props.setBarValue(Number(selectedBar), button)}
                  data-testid={`button`}
                >
                  {button}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

App.defaultProps = {
  bars: [],
  buttons: [],
  limit: 0,
  fetchData: () => {},
  setBarValue: () => {}
};

App.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.number),
  buttons: PropTypes.arrayOf(PropTypes.number),
  limit: PropTypes.number,
  fetchData: PropTypes.func,
  setBarValue: PropTypes.func
};

/* istanbul ignore next */
const mapStateToProps = state => ({
  bars: state.bars,
  buttons: state.buttons,
  limit: state.limit
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
  setBarValue: (selectedBar, value) => dispatch(setBarValue(selectedBar, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
