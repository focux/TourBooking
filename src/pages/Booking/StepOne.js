import React, { Fragment } from 'react';
import { Grid, Checkbox, Button } from 'material-ui';
import { MailOutline, Face, Phone } from '@material-ui/icons';
import { Formik } from 'formik';
import { BottomLineInput, BottomLineMaskedInput } from 'Components/Inputs';
import { StepContentTitle, CustomLabel } from './style';

const StepOne = ({ onSubmit, user = {}, activeStep, handleBack, handleNext, steps }) => (
  <Fragment>
    <StepContentTitle>Confirma tus datos de contacto</StepContentTitle>
    <Formik
      initialValues={{
        lastName: user.lastName || '',
        firstName: user.firstName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        whatsapp: user.whatsapp || false
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors, setValues }
      ) => {
        let { phoneNumber } = values;
        phoneNumber = phoneNumber.replace(/\s/g, '');
        phoneNumber = phoneNumber.replace('(', '');
        phoneNumber = phoneNumber.replace(')', '');
        phoneNumber = phoneNumber.replace('-', '');

        console.log(phoneNumber.length, phoneNumber);
        setErrors({});
        if (phoneNumber.length === 10) {
          setSubmitting(false);
          handleNext();
        } else {
          setErrors({ phoneNumber: 'Inserta un número de teléfono válido.' });
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
          <Grid item xs={12}>
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
                  <BottomLineMaskedInput
                    iconComponent={<Phone />}
                    type="tel"
                    name="phoneNumber"
                    placeholder="Número de celular"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    required
                  />
                  {touched.phoneNumber && errors.phoneNumber && <div>{errors.phoneNumber}</div>}
                </Grid>
                <Grid container justify="flex-start" alignItems="center">
                  <Grid item xs={12}>
                    <Grid container alignItems="center">
                      <Checkbox
                        name="whatsapp"
                        checked={values.whatsapp}
                        onChange={handleChange}
                        value="whatsapp"
                      />
                      <CustomLabel>¿Tú número tiene whatsapp?</CustomLabel>
                      {touched.whatsapp && errors.whatsapp && <div>{errors.whatsapp}</div>}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ marginTop: '2rem' }}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      variant="raised"
                    >
                      Back
                    </Button>
                    <Button
                      color="primary"
                      variant="raised"
                      style={{ marginLeft: '2rem' }}
                      type="submit"
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Fragment>
  )}
    </Formik>
  </Fragment>
);

export default StepOne;
