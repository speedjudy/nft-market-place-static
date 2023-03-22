import React from "react";
import Author from "./Author";
import CollectionForm from "./CollectionForm";

const CreateCollectionArea = () => {
  return (
    <>
      <div className="collection-widget-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <Author />

            <div className="col-lg-9">
              <div className="collection-form-area">
                <div className="section-title">
                  <h2>Create Collectible Item</h2>
                </div>

                <CollectionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCollectionArea;
