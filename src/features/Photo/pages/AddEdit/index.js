import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";

import "./AddEdit.scss";

function Main() {
  return (
    <div className="photo-main">
      <Banner title="Pick your amazing photo 🤓" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={(values) => console.log("Form submit: ", values)}
        />
      </div>
    </div>
  );
}

export default Main;
