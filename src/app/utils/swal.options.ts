import { SweetAlertOptions } from "sweetalert2";


const deleteBookOptions: SweetAlertOptions = {
  title: 'Do you sure to delete this book?',
  showCancelButton: true,
  icon:'warning',
  confirmButtonColor: '#282835',
  confirmButtonText: 'Yes, delete it',
};
const deleteCategoryOptions: SweetAlertOptions = {
  title: 'Do you sure to delete this Category?',
  showCancelButton: true,
  icon:'warning',
  confirmButtonColor: '#282835',
  confirmButtonText: 'Yes, delete it',
};
const deleteAuthorOptions: SweetAlertOptions = {
  title: 'Do you sure to delete this Author?',
  showCancelButton: true,
  icon:'warning',
  confirmButtonColor: '#282835',
  confirmButtonText: 'Yes, delete it',
};
export default { deleteBookOptions , deleteCategoryOptions ,deleteAuthorOptions}