import React, { Component, Fragment } from 'react';
import Header from 'Components/Header';
import { Grid, Stepper, Step, StepLabel, Button } from 'material-ui';
import { SectionContainer, CustomStepLabel, StepContent } from './style';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

export default class Booking extends Component {
  state = {
    activeStep: 0,
    steps: ['Confirma tus datos', 'Pago', 'Informaciones finales']
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  getCurrentContent = (step) => {
    const { activeStep, steps } = this.state;
    switch (step) {
      case 0:
        return (
          <StepOne
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            activeStep={activeStep}
            steps={steps}
          />);
      case 1:
        return <StepTwo />;
      default:
        return (
          <StepOne
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            activeStep={activeStep}
            steps={steps}
          />);
    }
  }

  render() {
    const { activeStep, steps } = this.state;
    return (
      <Fragment>
        <Header fixed />
        <SectionContainer>
          <Grid container justify="center">
            <Grid item xs={8}>
              <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                  const props = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...props}>
                      <CustomStepLabel {...labelProps}>
                        {label}
                      </CustomStepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <h1>
                      All steps completed - you&quot;re finished
                    </h1>
                  </div>
                ) : (
                  <div>
                    <StepContent>
                      {this.getCurrentContent(activeStep)}
                    </StepContent>
                    {activeStep !== 0 &&
                    <div style={{ marginTop: '2rem' }}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        variant="raised"
                      >
                        Back
                      </Button>
                      <Button
                        color="primary"
                        variant="raised"
                        onClick={this.handleNext}
                        style={{ marginLeft: '2rem' }}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                    }
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </SectionContainer>
      </Fragment>
    );
  }
}
