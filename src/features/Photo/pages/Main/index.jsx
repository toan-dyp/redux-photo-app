import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Images from "../../../../constants/images";
import Banner from "components/Banner";

function Main() {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      <Container className="text-center">
        <Link to="add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default Main;
