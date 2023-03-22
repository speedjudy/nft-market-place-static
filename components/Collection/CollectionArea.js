import React from "react";
import AuthorProfile from "./AuthorProfile";
import CollectionCard from "./CollectionCard";
import Pagination from "./Pagination";

const CollectionArea = () => {
  return (
    <>
      <div className="collection-widget-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AuthorProfile />
            </div>

            <div className="col-lg-9">
              <CollectionCard />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionArea;
