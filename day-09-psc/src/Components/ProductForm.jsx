import { useState } from "react";
const initState = {
  title: "",
  price: "",
  imageUrl: "",
};
function ProductForm({ handleFormSubmit }) {
  const [formState, setFormState] = useState(initState);

  const { title, price, imageUrl } = formState;

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formState);
  };

  return (
    <>
      <div id="product-creation-form">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">
            Title :-
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              placeholder="Enter Product title"
            />
          </label>
          <br />
          <label htmlFor="">
            Price :-
            <input
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              placeholder="Enter Product Price"
            />
          </label>
          <br />
          <label htmlFor="">
            ImageURL :-
            <input
              type="text"
              name="imageUrl"
              value={imageUrl}
              onChange={handleChange}
              placeholder="Enter Product Image Link"
            />
          </label>
          <br />
          <input type="submit" value="Create Product" />
        </form>
      </div>
    </>
  );
}

export default ProductForm;
