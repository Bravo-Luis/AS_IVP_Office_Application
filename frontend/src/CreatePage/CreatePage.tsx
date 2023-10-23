import { useState } from "react";

import "./CreatePage.css";

import {
  Button,
  Paper,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Typography,
  useTheme,
  Avatar,
} from "@mui/material";

type CreatePageProps = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    date: string;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    image: string | null;
    setImage: React.Dispatch<React.SetStateAction<string | null>>;
  };
  

  const CreatePage: React.FC<CreatePageProps> = ({
    name,
    setName,
    email,
    setEmail,
    date,
    setDate,
    image,
    setImage,
  }) => {

  const steps = ["Name", "Email", "Date of Birth", "Profile Picture", "Submit"];

    // STATE VARIABLES

  const [checkEmail, setCheckEmail] = useState(false);
  const [checkDate, setCheckDate] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

    // THEME
  const theme = useTheme();

    // REGEX PATTERNS
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const dobRegex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;


    // HELPFUL FUNCTIONS
  function handleImageChange(e : any){
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function validateEmail(email: string) {
    return emailRegex.test(email);
  }

  function validateDob(dob: string) {
    return dobRegex.test(dob);
  }

  function nextStepValid(step : number){
    switch(step){
        case 0:
            if(name){return true}else{return false}
        case 1:
            if(email && !checkEmail){return true}else{return false}
        case 2:
            if(date && !checkDate){return true}else{return false}
        case 3:
            if(image){return true}else{return false}
        case 4:
            return true
    }
  }

  return (
    <div id="create-page">
      <Paper className="create-page-background" elevation={5}>

        {/* STEPPER */}

        <Stepper id="create-stepper" activeStep={currentStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* NAME SECTION */}

        {currentStep == 0 && (
          <div className="name-section">
            <br />
            <TextField
              id="name-text-field"
              sx={{
                justifySelf: "flex-start",
              }}
              label="What should we call you?"
              fullWidth
              helperText="Please enter your name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                sx: {
                  fontSize: theme.typography.h3.fontSize,
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: theme.typography.h5.fontSize,
                },
              }}
            />
          </div>
        )}

        {/* EMAIL SECTION */}

        {currentStep == 1 && (
          <div className="email-section">
            <br />
            <TextField
              id="email-text-field"
              sx={{
                justifySelf: "flex-start",
              }}
              label="How can we reach you?"
              helperText="Please enter your email address"
              variant="standard"
              fullWidth
              error={checkEmail}
              color={!checkEmail && email ? "success" : "primary"}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setCheckEmail(!validateEmail(e.target.value));
              }}
              InputProps={{
                sx: {
                  fontSize: theme.typography.h3.fontSize,
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: theme.typography.h5.fontSize,
                },
              }}
            />
          </div>
        )}

        {/* DATE OF BIRTH SECTION */}

        {currentStep == 2 && (
          <div className="dob-section">
            <br />

            <TextField
              id="dob-text-field"
              sx={{
                justifySelf: "flex-start",
              }}
              label="When's your birthday?"
              helperText="Please enter your date of birth"
              fullWidth
              variant="standard"
              error={checkDate}
              color={!checkDate && date ? "success" : "primary"}
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setCheckDate(!validateDob(e.target.value));
              }}
              InputProps={{
                sx: {
                  fontSize: theme.typography.h3.fontSize,
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: theme.typography.h6.fontSize,
                },
                shrink: true,
              }}
            />
          </div>
        )}

        {/* PROFILE PICTURE SECTION */}

        {currentStep == 3 && (
          <div className="pfp-section">
            <br />

            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
              onChange={handleImageChange}
            />
            <Typography variant="h4" color="primary">
              {" "}
              Upload a profile picture!
            </Typography>
            <br />
            {image && (
              <Avatar
                alt="Uploaded Preview"
                src={image}
                sx={{ width: 250, height: 250 }}
              />
            )}
            <br />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                {image ? 'Replace Image' : 'Upload Image'}
              </Button>
            </label>
          </div>
        )}

        {/* OVERVIEW SECTION */}

        {currentStep == 4 && (
          <div className="submit-section">
            {image && (
              <Avatar
                alt="Uploaded Preview"
                src={image}
                sx={{ width: 225, height: 225 }}
              />
            )}
            <br />

            <TextField
              label={"Name"}
              defaultValue={name}
              fullWidth
              InputLabelProps={{
                sx: {
                  fontSize: theme.typography.h6.fontSize,
                },
                shrink: true,
              }}
              InputProps={{
                readOnly: true,
                sx: {
                  fontSize: theme.typography.h5.fontSize,
                },
              }}
            />
            <br />
            <TextField
              label={"Email"}
              defaultValue={email}
              fullWidth
              InputLabelProps={{
                sx: {
                  fontSize: theme.typography.h6.fontSize,
                },
                shrink: true,
              }}
              InputProps={{
                readOnly: true,
                sx: {
                  fontSize: theme.typography.h5.fontSize,
                },
              }}
            />
            <br />
            <TextField
              label={"Date of Birth"}
              defaultValue={date}
              fullWidth
              InputLabelProps={{
                sx: {
                  fontSize: theme.typography.h6.fontSize,
                },
                shrink: true,
              }}
              InputProps={{
                readOnly: true,
                sx: {
                  fontSize: theme.typography.h5.fontSize,
                },
              }}
            />
          </div>
        )}

        {/* BACK AND NEXT BUTTONS */}

        <div className="back-next-buttons">
          {currentStep > 0 && (
            <Button
              sx={{ fontSize: theme.typography.h5.fontSize }}
              variant="outlined"
              aria-required
              onClick={() => {
                if (currentStep > 0) {
                  setCurrentStep(currentStep - 1);
                }
              }}
            >
              Back
            </Button>
          )}
          <Button
            sx={{ fontSize: theme.typography.h5.fontSize, width: currentStep == 0 ? '100% !important' : '' }}
            variant="contained"
            disabled={!nextStepValid(currentStep)}
            onClick={() => {
              if (currentStep < 4) {
                setCurrentStep(currentStep + 1);
              }
            }}
          >
            {currentStep == 4 ? "Finish" : "Next"}
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default CreatePage;
