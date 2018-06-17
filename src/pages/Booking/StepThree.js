import React, { Fragment } from 'react';
import { Grid } from 'material-ui';
import moment from 'moment';
import { displayNumDate } from '../../utils';
import { StepContentTitle, InfoTitle, InfoBody } from './style';

const StepThree = ({ currentTour }) => {
  const {
    operator,
    departingDate,
    departingFrom,
    location,
    title,
    level
  } = currentTour;

  const titles = [
    'Tour',
    'Operador',
    'Ubicacion',
    'Dificultad',
    'Punto de partida',
    'Fecha de partida'
  ];

  const content = [
    title,
    operator,
    location,
    level,
    departingFrom,
    displayNumDate(departingDate)
  ];

  return (
    <Fragment>
      <StepContentTitle>Informaciones finales</StepContentTitle>
      {titles.map((v, k) => (
        <Grid container style={{ marginBottom: '.5rem' }}>
          <Grid item xs={3}>
            <InfoTitle>{v}</InfoTitle>
          </Grid>
          <Grid item xs={3}>
            <InfoBody>{content[k]}</InfoBody>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12}>
        <InfoBody>
          Nos pondremos en contacto contigo lo más pronto posible para darte las indicaciones correspondientes.
          Cualquier pregunta o duda sobre el viaje agendado, informanoslo a través del apartado de contacto.
          Gracias.
        </InfoBody>
      </Grid>
    </Fragment>
  );
};

export default StepThree;
