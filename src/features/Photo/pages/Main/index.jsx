import { Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Images from "../../../../constants/images";
import Banner from "components/Banner";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhotoEditClick = (photo) => {
    navigate(`${photo.id}`);
  };

  const handlePhotoRemoveClick = (photo) => {
    const photoId = photo.id;
    const action = removePhoto(photoId);
    dispatch(action);
  };
  const photos = useSelector((state) => state.photos);
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      <Container className="text-center">
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
        <Link to="add">ADD PICTURE</Link>
      </Container>
    </div>
  );
}

export default Main;
