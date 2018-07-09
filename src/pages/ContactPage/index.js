import React, { Component, Fragment } from 'react';
import Header from 'Components/Header';
import Heading from 'Components/Heading';
import { Grid, Button, CircularProgress } from 'material-ui';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { BottomLineInput, CustomTextarea } from 'Components/Inputs';
import { MailOutline, Face } from '@material-ui/icons';
import { SectionContainer, SubHeading } from './style';
import ContactService from '../../services/contactService';


class ContactPage extends Component {
  state = {
    formSent: false
  };

  render() {
    return (
      <Fragment>
        <Header white />
        <SectionContainer>
          <Grid container justify="center" alignItems="center">
            <Grid item container justify="center" xs={12} md={10}>
              <Heading>Contáctanos</Heading>
            </Grid>
            <Grid item xs={12} md={10} style={{ margin: '2rem 0' }}>
              <SubHeading>
                Cualquier duda, pregunta, sugerencia o cualquier otra cosa que se te ocurra,
                te queremos escuchar. Ya seas un tour operador o simplemente un aventurero,
                ¡Escribenos!
              </SubHeading>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Formik
              initialValues={{
                lastName: this.props.user.lastName || '',
                firstName: this.props.user.firstName || '',
                email: this.props.user.email || '',
                description: ''
              }}
              onSubmit={async (
                values,
                { setSubmitting, setErrors, setValues, resetForm }
              ) => {
                const response = await ContactService.saveForm(values);
                if (response && response._id) {
                  console.log('se envio');
                  setTimeout(() => this.setState({
                    formSent: true
                  }, () => {
                    setSubmitting(false);
                    resetForm();
                  }), 2000);
                }
              }
            }
            >
              {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
              }) => (
                <Fragment>
                  <Grid item xs={12} md={8}>
                    <form onSubmit={handleSubmit}>
                      <Grid container alignItems="center" spacing={24}>
                        <Grid item xs={12}>
                          <BottomLineInput
                            iconComponent={<Face />}
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            required
                          />
                          {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}
                        </Grid>
                        <Grid item xs={12}>
                          <BottomLineInput
                            iconComponent={<Face />}
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            required
                          />
                          {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
                        </Grid>
                        <Grid item xs={12}>
                          <BottomLineInput
                            iconComponent={<MailOutline />}
                            type="email"
                            name="email"
                            placeholder="Email address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            required
                          />
                          {touched.email && errors.email && <div>{errors.email}</div>}
                        </Grid>
                        <Grid item xs={12}>
                          <CustomTextarea
                            name="description"
                            placeholder="Cuentanos tu inquietud"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          />
                          {touched.email && errors.email && <div>{errors.email}</div>}
                        </Grid>
                        <Grid item xs={12}>
                          <Button type="submit" variant="raised" size="large" color="primary" disabled={isSubmitting}>
                          <Grid container alignItems="center" justify="center">
                            <Grid item>
                              {this.state.formSent ? 'Enviado' : 'Enviar'}
                            </Grid>
                            {isSubmitting &&
                            <Grid item>
                              <CircularProgress style={{ color: '#fff', height: '2rem', width: '2rem', marginLeft: '1rem' }} />
                            </Grid>
                            }
                          </Grid>
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Fragment>
          )}
        </Formik>
          </Grid>
        </SectionContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(ContactPage);
