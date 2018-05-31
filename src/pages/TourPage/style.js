import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 7.6rem);;
  margin-top: 7.6rem;
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 30rem;
  background-image: url('${props => props.image}');
  background-position: center;
  background-size: cover;

`;
