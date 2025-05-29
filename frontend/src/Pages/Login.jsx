import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const price = form.price.value;
    const image = form.image.value;

    const formData = {
      coffeeName,
      price,
      image
    }

    console.log(formData)

    // const res = await fetch('/api/coffee', {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': "application/json"

    //   },
    //   body: JSON.stringify(formData),
    // });
    const res = await fetch('/api/coffee')
    if (!res.ok) {
      alert("something went wrong: ", res.statusText );
      return;
    }
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className="mt-40">
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg p-2.5"
        type="text"
        name="coffeeName"
        id="coffeeName"
      />
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg p-2.5"
        type="number"
        name="price"
        id="price"
      />
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg p-2.5"
        type="text"
        name="image"
        id="image"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
