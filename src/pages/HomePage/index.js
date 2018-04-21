import React from 'react';
import Header from 'Components/Header';
import SectionContainer from 'Components/SectionContainer';
import SearchBar from 'Components/SearchBar';
import {
  Container,
  SearchBarContainer
} from './style';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header />
        <SectionContainer image={'images/bighero.jpg'}>
          <SearchBar/>
        </SectionContainer>
      </Container>
    );
  }
}
