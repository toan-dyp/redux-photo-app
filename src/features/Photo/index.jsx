import { Routes, Route } from "react-router-dom";
import AddEdit from "./pages/AddEdit";
import Main from "./pages/Main";
import NotFound from "../../components/NotFound";
// const Temp = () => <div>Temp components</div>;

function Photo(props) {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<Main />} />
      <Route path="/add" element={<AddEdit />} />
      <Route path="/:photoId" element={<AddEdit />} />
    </Routes>
  );
}

export default Photo;
