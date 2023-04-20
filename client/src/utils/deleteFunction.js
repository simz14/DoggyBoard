import Swal from "sweetalert2";

export const handleClickDelete = async (id, setItems, navigateTo) => {
  const alertResult = await Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });

  if (alertResult.isConfirmed) {
    console.log(navigateTo);
    setItems();
    if (navigateTo) {
      navigateTo();
    }
  }
};
