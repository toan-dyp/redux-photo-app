import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
  invalid: PropTypes.bool,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
  invalid: false,
};

const getRandomImageUrl = () => {
  const randomId = Math.floor(Math.random() * 2001);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

function RandomPhoto(props) {
  const { invalid, name, imageUrl, onImageUrlChange, onRandomButtonBlur } =
    props;

  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  console.log(invalid);
  return (
    <div className={`random-photo ${invalid ? "is-invalid" : ""}`}>
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </div>
      {imageUrl && (
        <div className="random-photo__photo">
          <img src={imageUrl} alt="Oops ... not found. Please click again" />
        </div>
      )}
    </div>
  );
}

export default RandomPhoto;
