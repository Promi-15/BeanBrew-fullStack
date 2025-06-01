import { useEffect, useState } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import Swal from "sweetalert2";
const Lists = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const getCoffees = async () => {
      try {
        const res = await fetch("/api/coffee");
        console.log(res);
        if (!res.ok) {
          alert("something wrong", res.statusText);
        }
        const data = await res.json();
        setCoffees(data);
        console.log(data);
      } catch (error) {
        console.log("not fetching", error);
      }
    };
    getCoffees();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then(async (result) => {
      if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/coffee/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (res.ok) {
          setCoffees((prev)=>prev.filter((coffee)=> coffee._id !=id))
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            })
          ;
        } else {
           Swal.fire({
              title: "Failed!",
              text:` Your file can not delete.${data.message}`,
              icon: "warning",
            })
        }
      } catch (error) {
              Swal.fire({
              title: "Error!",
              text: `Something wrong ${error.message}`,
              icon: "error",
            })       
      }
    }
    })
  window.location.reload()
  };

  return (
    <div className="grid lg:grid-cols-5   grid-cols-2 gap-5 lg:mt-32 lg:mx-10 mx-5 my-5 ">
      {coffees.map((coffee) => (
        <div
          key={coffee._id}
          className="border-2 border-black p-2 text-center rounded-2xl"
        >
          <div className="  flex flex-col  justify-center ">
            <img
              src={coffee.image}
              alt=""
              className="w-64 h-44 object-cover rounded-2xl "
            />
            <div className="space-y-1.5 mt-2">
              <p className="roboto italic font-bold text-xl">
                {coffee.coffeeName}
              </p>
              <div>
                <p>${coffee.price}</p>
                <div className="flex justify-center gap-3 items-center border-gray-300 border-2 rounded-3xl px-2 cursor-pointer">
                  <p onClick={() => handleDelete(coffee._id)} >Delete</p>
                  <p>
                    <IoTrashBinOutline />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lists;
