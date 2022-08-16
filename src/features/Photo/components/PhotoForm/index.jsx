import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
//import Images from "constants/images";
import { Button, FormGroup, Spinner } from "reactstrap";
import { FastField, Formik, Form } from "formik";
import PropTypes from "prop-types";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from "yup";

PhotoForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  isAddMode: PropTypes.bool,
};

PhotoForm.defaultProps = {
  initialValues: {},
  onSubmit: null,
  isAddMode: false,
};

function PhotoForm(props) {
  const { initialValues, isAddMode } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Không để trống phần này"),

    categoryId: Yup.number().required("Không để trống phần này").nullable(),

    photo: Yup.string().required("Không để trống phần này"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;
        // console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              //=========
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              //=========
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              //=========
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isSubmitting && (
                  <>
                    <Spinner size="sm" />{" "}
                  </>
                )}
                {isAddMode ? "Add to album" : "Upadte your photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
