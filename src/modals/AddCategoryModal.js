import "./AddCategoryModal.scss";

export default function AddCategoryModal() {
  return (
    <div className="modal fade" id="add_category_modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="close p-0"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <img src={process.env.PUBLIC_URL + "/icons/close-icon.svg"} alt={"close-icon"}/> ZAVRIEŤ
            </span>
          </button>
          <div className="modal-content-without-close">
            <div className="modal-header">
              <h5
                className="modal-title"
              >
                PRIDAŤ KATEGÓRIU
              </h5>
            </div>
            <div className="modal-footer">
              <p>ZADAJTE NÁZOV KATEGÓRIE</p>
              <button type="button" className="btn btn-success">
                <img src={process.env.PUBLIC_URL + "/icons/add-icon.svg"} alt={"add-icon"}/>
                PRIDAŤ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
