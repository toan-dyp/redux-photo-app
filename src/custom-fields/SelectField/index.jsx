import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";
SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  //------------
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disable: false,
  options: [],
};

function SelectField(props) {
  const { field, form, label, placeholder, disable, options } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };
  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? "#ddd" : showError ? "red" : "#ddd",
      "&:hover": {
        borderColor: state.isFocused ? "#ddd" : showError ? "red" : "#ddd",
      },
    }),
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        //=======
        placeholder={placeholder}
        isDisabled={disable}
        options={options}
        styles={customStyles}
        className={showError ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;
