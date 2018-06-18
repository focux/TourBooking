import React, { Fragment } from 'react';
import { Grid, Paper } from 'material-ui';
import { CheckCircle } from '@material-ui/icons';
import { displayNumDate } from '../../utils';
import { StepContentTitle, InfoTitle, InfoBody, CustomPaper } from './style';

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
        <Grid container key={k} style={{ marginBottom: '.5rem' }}>
          <Grid item xs={3}>
            <InfoTitle>{v}</InfoTitle>
          </Grid>
          <Grid item xs={4}>
            <InfoBody>{content[k]}</InfoBody>
          </Grid>
        </Grid>
      ))}
      <Grid container>
        <CustomPaper>
          <Grid item xs={12}>
            <InfoBody>
              Nos pondremos en contacto contigo lo más pronto posible para darte las indicaciones correspondientes.
              Cualquier pregunta o duda sobre el viaje agendado, informanoslo a través del apartado de contacto.
              Gracias.
            </InfoBody>
          </Grid>
        </CustomPaper>
      </Grid>
    </Fragment>
  );
};

export default StepThree;
