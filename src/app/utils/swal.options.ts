import { SweetAlertOptions } from "sweetalert2";


const deleteBookOptions: SweetAlertOptions = {
  title: 'Do you sure to delete this book?',
  showCancelButton: true,
  icon:'warning',
  confirmButtonColor: '#282835',
  confirmButtonText: 'Yes, delete it',
};

export default { deleteBookOptions}