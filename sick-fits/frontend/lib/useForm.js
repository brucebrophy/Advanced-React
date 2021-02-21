import { useState } from "react";

export default function useForm(inital = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(inital);

  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "file") {
      [value] = e.target.files;
    }

    setInputs({
      // copy existing state
      ...inputs,
      // update the input that's being changed
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(inital);
  }

  function clearForm() {
    const blankState = Object.entries(inputs).map(([key]) => [key, ""]);
    setInputs(Object.fromEntries(blankState));
  }

  return { inputs, handleChange, resetForm, clearForm };
}
