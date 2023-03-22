import React from "react";
import Link from "next/link";

const CollectionForm = () => {
  const [mediaPreview, setMediaPreview] = React.useState("");

  const handleChange = (e) => {
    const { name, files } = e.target;
    setMediaPreview(window.URL.createObjectURL(files[0]));
  };
  return (
    <div className="collection-form">
      <div className="profile-outer">
        <h3>Upload File</h3>
        <div className="profileButton">
          <input
            className="profileButton-input"
            type="file"
            name="media"
            accept="image/*, application/pdf"
            onChange={handleChange}
          />
        </div>
      </div>
      <img className="media-preview" src={mediaPreview} />
      <div className="collection-category">
        <h3>Choose Item Category</h3>
        <ul>
          <li>
            <Link href="/create-collection">
              <a target="_blank">Art</a>
            </Link>
          </li>
          <li>
            <Link href="/create-collection">
              <a target="_blank">Virtual Worlds</a>
            </Link>
          </li>
          <li>
            <Link href="/create-collection">
              <a target="_blank">Trending Cards</a>
            </Link>
          </li>
          <li>
            <Link href="/create-collection">
              <a target="_blank">Collectibles</a>
            </Link>
          </li>
          <li>
            <Link href="/create-collection">
              <a target="_blank">Music</a>
            </Link>
          </li>
          <li>
            <Link href="/create-collection">
              <a target="_blank">Games</a>
            </Link>
          </li>
          <li>
            <Link href="/create-collection">
              <a target="_blank">Domains</a>
            </Link>
          </li>
          <li>
            <Link href="/create-collection">
              <a target="_blank">Memes</a>
            </Link>
          </li>
          <li>
            <Link href="/create-collection">
              <a target="_blank">NFT Gifts</a>
            </Link>
          </li>
        </ul>
      </div>
      <form>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <label>Item Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="e. g. “walking in the air”"
              />
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                className="form-control"
                id="description"
                cols="30"
                rows="5"
                placeholder="e. g. “after purchasing you’ll able to get the real product”"
              ></textarea>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Royalties</label>
              <input type="text" className="form-control" placeholder="5%" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Size</label>
              <input
                type="text"
                className="form-control"
                placeholder="e. g. “size” "
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Property</label>
              <input
                type="text"
                className="form-control"
                placeholder="subject"
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label>Number Of Copies</label>
              <input
                type="text"
                className="form-control"
                placeholder="e. g. “1”"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="checkbox-method-area">
              <div className="col-lg-12 col-md-12">
                <div className="checkbox-method">
                  <p>
                    <input type="radio" id="fixed-price" name="radio-group" />
                    <label htmlFor="fixed-price">Fixed Price</label>
                  </p>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="checkbox-method">
                  <p>
                    <input type="radio" id="timed-auction" name="radio-group" />
                    <label htmlFor="timed-auction">Timed Auction</label>
                  </p>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="checkbox-method">
                  <p>
                    <input type="radio" id="open-bid" name="radio-group" />
                    <label htmlFor="open-bid">Open For Bid</label>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <button type="submit" className="default-btn border-radius-5">
              Create Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CollectionForm;
