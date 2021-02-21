import useForm from "../lib/useForm";
import Form from "./styles/Form";

export default function CreateProduct() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const { inputs, handleChange, clearForm } = useForm({
    image: "",
    name: "Nice Shoes",
    price: 40.42,
    description: "New shoes from Nike",
  });

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset aria-busy>
        <label htmlFor="image">
          Image
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            value={inputs.price}
            onChange={handleChange}
            placeholder="100.00"
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            value={inputs.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </label>

        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
