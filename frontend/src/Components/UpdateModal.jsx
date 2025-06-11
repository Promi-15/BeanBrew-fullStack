import useUpdateModalStore from "../../store/updateModalStore";
import Swal from "sweetalert2";
const UpdateModal = () => {
  const { closeUpdateModal, updatingCoffee } = useUpdateModalStore();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const coffeeName = e.target.name.value;
    const price = e.target.price.value;
    const image = e.target.image.value;

    const formData = {
      coffeeName,
      price,
      image,
    };
    const res = await fetch(`/api/coffee/${updatingCoffee._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);

    closeUpdateModal()

   
     Swal.fire({
          position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        
 window.location.reload()
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4 w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="lg:w-[700px] rounded-lg bg-white p-6 shadow-lg">
        <h2
          id="modalTitle"
          className="text-xl font-bold text-gray-900 sm:text-2xl text-center italic"
        >
          Update Coffee item
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="mt-4 space-y-1.5">
            <label htmlFor="Confirm" className="mt-4 block">
              <span>Name</span>
              <input
                type="text"
                name="name"
                id="Confirm"
                defaultValue={updatingCoffee.coffeeName}
                className="mt-0.5 w-full rounded border-black border-2  sm:text-sm p-2 shadow-2xl"
              />
            </label>
            <label htmlFor="Confirm" className="mt-4 block">
              <span>Price</span>
              <input
                type="text"
                name="price"
                id="Confirm"
                defaultValue={updatingCoffee.price}
                className="mt-0.5 w-full rounded  shadow-2xl border-black border-2 sm:text-sm p-2"
              />
            </label>
            <label htmlFor="Confirm" className="mt-4 block">
              <span>Image</span>
              <input
                type="text"
                name="image"
                id="Confirm"
                defaultValue={updatingCoffee.image}
                className="mt-0.5 w-full rounded  shadow-2xl border-black border-2 sm:text-sm p-2"
              />
            </label>
          </div>
          <footer className="mt-6 flex justify-end gap-2">
            <button
              type="button"
              className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              onClick={closeUpdateModal}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Done
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
