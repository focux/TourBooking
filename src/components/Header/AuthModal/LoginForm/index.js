import React from 'react';
import { Formik } from 'formik';
import { Grid } from 'material-ui';
import { BottomLineInput } from 'Components/Inputs';
import { BigButton } from 'Components/Buttons';
import { LockOutline, MailOutline } from '@material-ui/icons';

const LoginForm = ({
  onSubmit,
  onError
}) => (
  <Formik
    initialValues={{
      email: '',
      password: ''
    }}
    onSubmit={(
      values,
      { setSubmitting, setErrors, setValues }
    ) => {
      setSubmitting(false);
      onSubmit();
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
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" spacing={16}>
          <Grid item sm={12}>
            <BottomLineInput
              iconComponent={<MailOutline />}
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
          </Grid>
          <Grid item sm={12}>
            <BottomLineInput
              iconComponent={<LockOutline />}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password && <div>{errors.password}</div>}
          </Grid>
          <Grid item sm={12}>
            <BigButton type="submit" disabled={isSubmitting}>
              Log in
            </BigButton>
          </Grid>
        </Grid>
      </form>
)}
  </Formik>
);

export default LoginForm;
