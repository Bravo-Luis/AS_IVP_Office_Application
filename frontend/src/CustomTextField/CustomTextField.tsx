import './CustomTextField.css'
import { TextField, TypographyProps, TextFieldProps } from '@mui/material'

type CustomTextFieldProps = {
    id?: string;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    label: string;
    helperText?: string;
    labelFontSize : TypographyProps['fontSize'];
    inputFontSize : TypographyProps['fontSize'];
    variant? : TextFieldProps['variant']
    type?: string
    error?: boolean
    color?: string
    disabled?: boolean;
    defaultValue?: string;
    readOnly?: boolean;
    checkValue?: React.Dispatch<React.SetStateAction<boolean>>
    validateValue?:  (arg0: string) => boolean
    labelShrink?: boolean,
    className?: string
  };

  const CustomTextField: React.FC<CustomTextFieldProps> = ({
    id,
    value,
    setValue,
    label, 
    helperText,
    inputFontSize,
    labelFontSize,
    variant,
    disabled=false,
    defaultValue='',
    readOnly=false,
    checkValue,
    validateValue,
    type,
    error,
    color,
    labelShrink,
    className

  }) => {

    return(
        <TextField
        id={id}
        className={className}
        sx={{
          justifySelf: "flex-start",
        }}
        label={label}
        fullWidth
        aria-required
        disabled={disabled}
        defaultValue={defaultValue}
        helperText={helperText}
        variant={variant}
        value={value}
        type={type}
        error={error}
        color={color as "success" | "primary"}
        onChange={(e) => {
            if (setValue){
                setValue(e.target.value)
            }
            if (checkValue && validateValue){
                checkValue(!validateValue(e.target.value));
            }
        }}
        InputProps={{
            readOnly: readOnly,
          sx: {
            fontSize: inputFontSize,
          },
        }}
        InputLabelProps={{
          sx: {
            fontSize: labelFontSize,
          },
          shrink: labelShrink
        }}
      />
    )
}

export default CustomTextField