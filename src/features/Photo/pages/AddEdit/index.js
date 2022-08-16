import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto } from "features/Photo/photoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./AddEdit.scss";

AddEdit.propTypes = [];

function AddEdit(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Adding Photo...");

      setTimeout(() => {
        const action = addPhoto(values);
        dispatch(action);

        navigate("/");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 🤓" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEdit;
