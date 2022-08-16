import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { randomNumber } from "utils/common";

import "./AddEdit.scss";

AddEdit.propTypes = [];

function AddEdit(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editPhoto = useSelector((state) =>
    state.photos.find((x) => x.id === +photoId)
  );

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Adding Photo...");

      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999),
          };

          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }
        navigate("/");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 🤓" />

      <div className="photo-edit__form">
        <PhotoForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEdit;
