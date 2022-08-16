import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Images from "../../../../constants/images";
import Banner from "components/Banner";
import { useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";

const handlePhotoEditClick = (photo) => {
  console.log(photo);
};

const handlePhotoRemoveClick = (photo) => {
  console.log(photo);
  const photoId = photo.id;
  const action = removePhoto(photoId);
};

function Main() {
  const photos = useSelector((state) => state.photos);
  console.log("List photos: ", photos);
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
