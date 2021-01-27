import Category from "../components/Category";
import HeaderContent from "../components/HeaderContent";
import { AddCategory } from "../components/AddCategory";
import CategoryJSON from "../storage/CategoryJSON.json";
import AddCategoryModal from "../modals/AddCategoryModal";
import PhotoJSON from "../storage/PhotoJSON.json"

export default function CategoryContent(props) {

  // const numPhotos = PhotoJSON.filter(i=>i['tag'] === id).length
  

  return (
    <div className="content">
      <HeaderContent headerName={"KATEGÓRIE"} icon={false} />
      <div className="img-area">
        {CategoryJSON.map((element) => {
          const numPhotos = PhotoJSON.filter(i=>i['tag'] === element.tag).length
          
          return (
            <Category
              key={element.id}
              photo={process.env.PUBLIC_URL + "./img" + element.photo}
              theme={element.theme}
              num_photo={numPhotos + " fotiek"}
              id={element.tag}
              onMouseEnter={() => props.onMouseEnter(element.photo)}
            />
          );
        })}
        <AddCategory />
        <AddCategoryModal />
      </div>
    </div>
  );
}
