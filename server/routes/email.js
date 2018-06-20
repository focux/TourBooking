const router = require('express').Router();
const { authCheck } = require('../middlewares');
const moment = require('moment');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_KEY);

router.post('/confirmation', authCheck, (req, res) => {
  const {
    firstName,
    email
  } = req.user;
  console.log(email, 'aqui el email');
  const from = 'info@driscovery.com';
  const {
    title,
    spaces,
    operator,
    departingDate,
    departingFrom
  } = req.body;
  const signature = 'Que tengas un buen viaje, <br/> Driscovery Team';
  const body = `
  <p>¡En hora buena <strong>${firstName}</strong>! <br /> Tu reserva se ha realizado con éxito. A continuación te proporcionamos,
  la información que necesitas saber acerca de tu excursión. De todas maneras, pronto estaremos en contacto contigo para responder
  las preguntas que tengas con respecto al viaje.</p>
  <br/>
  <ul>
    <li>Excursion: ${title}</li>
    <li>Cupos apartados: ${spaces}</li>
    <li>Tour operador: ${operator}</li>
    <li>Fecha de partida: ${moment(departingDate).format('DD/MM/YYYY h:mm:ss a')}</li>
    <li>Lugar de encuentro: ${departingFrom}</li>
  </ul>
  <p>
    ${signature}
  </p>
  `;
  const msg = {
    to: email,
    from,
    subject: 'Confirmación de reserva',
    html: body
  };
  sgMail.send(msg);
  res.status(200).send();
});

router.post('/booking/notification', authCheck, (req, res) => {
  const from = 'info@driscovery.com';
  const body = 'Guey maldito loco, alguien hizo booking';
  const msg = {
    to: ['focuux@gmail.com', 'haaroldd.dominguez@gmail.com'],
    from,
    subject: 'Maldito loco hay un booking new',
    text: body
  };
  sgMail.send(msg);
  res.status(200).send();
});

module.exports = router;
