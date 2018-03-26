import React from 'react';
import Header from 'Components/Header';
import HeroContainer from 'Components/HeroContainer';
import {
  Container,
  SearchBarContainer
} from './style';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header />
        <HeroContainer image={'images/bighero.jpg'} title={'More deals than day in a year'} place={'Punta Cana'} />
        <SearchBarContainer>
        </SearchBarContainer>
      </Container>
    );
  }
}
