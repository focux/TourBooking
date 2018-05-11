import styled from 'styled-components';

export const CardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  background-image: linear-gradient(to top, #fff 0%, transparent 30%), url('${props => props.image}');
  background-position: center;
  background-size: cover;
  overflow: hidden;
  transition: all .2s ease-out;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-30%, 70%);
    display: inline-block;
    width: 100%;
    height: 40%;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, .9);
    z-index: 2;
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(50%, 60%);
    display: inline-block;
    width: 100%;
    height: 40%;
    border-radius: 60%;
    background-color: rgba(255, 255, 255, .8);
    z-index: 2;
  }
`;

export const HeaderCloud = styled.div`
  position: absolute;
   bottom: 0;
   right: 0;
   transform: translate(0, 60%);
   display: inline-block;
   width: 110%;
   height: 40%;
   border-radius: 50%;
   background-color: rgba(255, 255, 255, .7);
   z-index: 1;
`;

export const CardBottom = styled.div`
  width: 100%;
  height: 30%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  transition: all .2s ease-out;
`;

export const CardTitle = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2.5px;
  color: ${props => props.theme.primaryColor};
  text-transform: uppercase;
`;

export const CardSubtitle = styled.div`
  text-align: center;
  font-size: 11px;
  letter-spacing: 2.5px;
  color: rgba(0, 0, 0, .5);
  margin-top: 5px;
  text-transform: uppercase;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${props => props.theme.primaryColor};
  margin-top: auto;
`;

export const FooterText = styled.div`
  font-size: ${props => props.fontSize};
  font-weight: 400;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FooterSmallText = styled.span`
  font-size: 12px;
`;

export const Card = styled.div`
  width: 100%;
  height: 40rem;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0,0,0,.15);
  transition: all .2s ease-out;

  &:hover ${CardHeader} {
    height: 100%;
  }

  &:hover ${CardBottom} {
    height: 0;
    opacity: 0;
    padding: 0;
  }
`;
