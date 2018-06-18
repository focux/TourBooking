import React, { Fragment } from 'react';
import { Formik } from 'formik';
import { Grid, Input, InputLabel, MenuItem } from 'material-ui';
import { BigButton } from 'Components/Buttons';
import { SelectInput, StyledMenuItem, BottomLineInput } from 'Components/Inputs';
import { LockOutline, MailOutline, Face } from '@material-ui/icons';
import { ModalText, ModalLink, Divisor } from './style';
import Constants from '../../../../config/constants';

const SignUpForm = ({
  onSubmit,
  onError,
  onChangePage
}) => (
  <Formik
    initialValues={{
      lastName: '',
      firstName: '',
      email: '',
      password: '',
      month: 1,
      day: 1,
      year: 18
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
                />
                {touched.email && errors.email && <div>{errors.email}</div>}
              </Grid>
              <Grid item xs={12}>
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
              <Grid container item xs={12} spacing={16}>
                <Grid item xs={12}>
                  <ModalText>Birthday</ModalText>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor="month">Month</InputLabel>
                  <SelectInput
                    value={values.month}
                    onChange={handleChange}
                    inputProps={{
                      name: 'month',
                      id: 'month'
                    }}
                    autoWidth
                  >
                    <StyledMenuItem value={1}>Enero</StyledMenuItem>
                    <StyledMenuItem value={2}>Febrero</StyledMenuItem>
                    <StyledMenuItem value={3}>Marzo</StyledMenuItem>
                    <StyledMenuItem value={4}>Abril</StyledMenuItem>
                    <StyledMenuItem value={5}>Mayo</StyledMenuItem>
                    <StyledMenuItem value={6}>Junio</StyledMenuItem>
                    <StyledMenuItem value={7}>Julio</StyledMenuItem>
                    <StyledMenuItem value={8}>Agosto</StyledMenuItem>
                    <StyledMenuItem value={9}>Septiembre</StyledMenuItem>
                    <StyledMenuItem value={10}>Octubre</StyledMenuItem>
                    <StyledMenuItem value={11}>Noviembre</StyledMenuItem>
                    <StyledMenuItem value={12}>Diciembre</StyledMenuItem>
                  </SelectInput>
                </Grid>
                <Grid item xs={2}>
                  <InputLabel htmlFor="day">Day</InputLabel>
                  <SelectInput
                    value={values.day}
                    onChange={handleChange}
                    inputProps={{
                      name: 'day',
                      id: 'day'
                    }}
                    autoWidth
                  >
                    <StyledMenuItem value={1}>1</StyledMenuItem>
                    <StyledMenuItem value={2}>2</StyledMenuItem>
                    <StyledMenuItem value={3}>3</StyledMenuItem>
                    <StyledMenuItem value={4}>4</StyledMenuItem>
                    <StyledMenuItem value={5}>5</StyledMenuItem>
                    <StyledMenuItem value={6}>6</StyledMenuItem>
                    <StyledMenuItem value={7}>7</StyledMenuItem>
                    <StyledMenuItem value={8}>8</StyledMenuItem>
                    <StyledMenuItem value={9}>9</StyledMenuItem>
                    <StyledMenuItem value={10}>10</StyledMenuItem>
                    <StyledMenuItem value={11}>11</StyledMenuItem>
                    <StyledMenuItem value={12}>12</StyledMenuItem>
                    <StyledMenuItem value={13}>13</StyledMenuItem>
                    <StyledMenuItem value={14}>14</StyledMenuItem>
                    <StyledMenuItem value={15}>15</StyledMenuItem>
                    <StyledMenuItem value={16}>16</StyledMenuItem>
                    <StyledMenuItem value={17}>17</StyledMenuItem>
                    <StyledMenuItem value={18}>18</StyledMenuItem>
                    <StyledMenuItem value={19}>19</StyledMenuItem>
                    <StyledMenuItem value={20}>20</StyledMenuItem>
                    <StyledMenuItem value={21}>21</StyledMenuItem>
                    <StyledMenuItem value={22}>22</StyledMenuItem>
                    <StyledMenuItem value={23}>23</StyledMenuItem>
                    <StyledMenuItem value={24}>24</StyledMenuItem>
                    <StyledMenuItem value={25}>25</StyledMenuItem>
                    <StyledMenuItem value={26}>26</StyledMenuItem>
                    <StyledMenuItem value={27}>27</StyledMenuItem>
                    <StyledMenuItem value={28}>28</StyledMenuItem>
                    <StyledMenuItem value={29}>29</StyledMenuItem>
                    <StyledMenuItem value={30}>30</StyledMenuItem>
                    <StyledMenuItem value={31}>31</StyledMenuItem>
                  </SelectInput>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor="year">Year</InputLabel>
                  <SelectInput
                    value={values.year}
                    onChange={handleChange}
                    inputProps={{
                      name: 'year',
                      id: 'year'
                    }}
                    autoWidth
                  >
                    <StyledMenuItem value={18}>2018</StyledMenuItem>
                    <StyledMenuItem value={17}>2017</StyledMenuItem>
                    <StyledMenuItem value={16}>2016</StyledMenuItem>
                  </SelectInput>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <BigButton type="submit" disabled={isSubmitting}>
                  Sign up
                </BigButton>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Divisor />
        </Grid>
        <Grid container item justify="center" xs={12}>
          <ModalText>Already have an {Constants.appName} account?</ModalText>
          <ModalLink size={1.6} onClick={onChangePage}>Log in</ModalLink>
        </Grid>
      </Fragment>
)}
  </Formik>
);

export default SignUpForm;
