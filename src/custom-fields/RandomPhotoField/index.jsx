import RandomPhoto from "components/RandomPhoto";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  lable: PropTypes.string,
};

RandomPhotoField.deafaultProps = {
  lable: "",
};

function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };

  console.log(touched[name]);
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
        invalid={showError}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default RandomPhotoField;
