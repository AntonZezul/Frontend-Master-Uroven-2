import HeaderContent from "../components/HeaderContent";
import Photo from "../components/Photo";
import { AddPhoto } from "../components/AddPhoto";
import PhotoJSON from "../storage/PhotoJSON.json";
import { useParams, useLocation } from "react-router-dom";
import PhotoView from "../modals/PhotoView";
import { useState } from "react";
import AddPhotoModal from "../modals/AddPhotoModal";

export default function PhotoContent(props) {
  const { id } = useParams();
  const location = useLocation();
  const [image, setImage] = useState("");
  const [index, setIndex] = useState();

  const firstImg = PhotoJSON.filter(i=>i['tag'] === id)[0]

  setTimeout(() => {
    props.bg(firstImg.photo)
  }, 200);

  const arrID = PhotoJSON.filter((i) => i["tag"] === id).map((_, i) => i);
  const arrPhoto = PhotoJSON.filter((i) => i["tag"] === id).map(
    (ph) => ph.photo
  );

  const wrapperFunction = (id) => {
    setIndex(arrID[id]);
    setImage(arrPhoto[arrID[id]]);
  };

  const nextIc = (id) => {
    id++;
    setIndex(id);
    setImage(arrPhoto[id]);
    if (id === arrPhoto.length) {
      setIndex(0);
      setImage(arrPhoto[0]);
    }
  };

  const prevIc = (id) => {
    id--;
    setIndex(id);
    setImage(arrPhoto[id]);
    if (id < 0) {
      setIndex(arrPhoto.length - 1);
      setImage(arrPhoto[arrPhoto.length - 1]);
    }
  };

  return (
    <div className="content">
      <HeaderContent headerName={location.state.pass} icon={true} />
      <div className="img-area">
        {PhotoJSON.filter((i) => i["tag"] === id).map((element, i) => {
          return (
            <Photo 
              key={i}
              photo={process.env.PUBLIC_URL + "/img" + element.photo}
              wrapperFunction={() => wrapperFunction(i)}
            />
          );
        })}

        <PhotoView
          photo={image}
          nextIcon={() => nextIc(index)}
          prevIcon={() => prevIc(index)}
        />
        <AddPhoto />
        <AddPhotoModal />
      </div>
    </div>
  );
}
