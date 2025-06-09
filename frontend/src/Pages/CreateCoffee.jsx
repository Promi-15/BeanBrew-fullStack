import Swal from "sweetalert2"

const CreateCoffee = () => {
  
  const handleAdd = async (e) => {
    e.preventDefault();
    const coffeeName = e.target.name.value;
    const price = e.target.price.value;
    const image = e.target.image.value;

    const formData = {
      coffeeName,
      price,
      image,
    };
    console.log(formData);

    const res = await fetch("/api/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    //ami backend theke j msg ditesi pita antese
    const data = await res.json();
    console.log(data);

    // top e oi msg success e show kortese
    Swal.fire({
      position: "center",
      icon: "success",
      title: data.message,
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset()
  };

  return (
    <div
      className="   object-cover lg:pt-30 min-h-screen  bg-cover bg-no-repeat  bg-center  "
      style={{ backgroundImage: "url('/create.jpg') " }}
    >
      <p className="text-4xl italic font-bold text-center my-5">
        Create A new item
      </p>
      <div
        className="  max-w-xl lg:mx-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10  px-5 border-2 border-gray-500 shadow-2xl shadow-gray-700 
"
      >
        <form
          className=" space-y-4  lg:p-10  "
          onSubmit={handleAdd}
        >
          <label className="text-lg italic font-light ">Name</label>
          <input
            type="text"
            name="name"
            id=""
            className="p-2 border-2 w-full mt-2 rounded-xl"
            placeholder="name"
          />
          <label className="text-lg italic font-light">Price</label>
          <input
            type="number"
            name="price"
            id=""
            className="p-2 border-2 w-full mt-2 rounded-xl"
            placeholder="price"
          />
          <label className="text-lg italic font-light">Image</label>
          <input
            type="text"
            name="image"
            id=""
            className="p-2 border-2 w-full mt-2 rounded-xl"
            placeholder="image"
          />
          <button
            className="btn my-3 bg-transparent font-bold text-xl hover:shadow-2xl hover:shadow-gray-800 hover:italic w-full border-2 border-black"
            type="submit"
          >
            Create
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default CreateCoffee;
