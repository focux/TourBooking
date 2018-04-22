import React, { PureComponent, Fragment } from 'react';
import Header from 'Components/Header';
import SectionContainer from 'Components/SectionContainer';
import SearchBar from 'Components/SearchBar';
import { Typography, Grid } from 'material-ui';
import {
  Container,
  StyledTyped,
  StyledDownArrIcon,
  BottomGrid
} from './style';
import FirstSection from './FirstSection';

const typedText = ['Dominican Republic &#x1F1E9;&#x1F1F4;', 'beaches &#x1F3DD;', 'mountains &#x1F3D4;', 'rivers &#x1F30A;', 'experiences &#x1F938;', 'Pico Duarte &#x1F9D7;', 'Laguna Dudu &#x1F3CA;', 'El Limon &#x1F3C7;', 'caribbean &#x1F5FA;', 'happiness &#x1F57A;'];

export default class HomePage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <FirstSection />
      </Fragment>
    );
  }
}
