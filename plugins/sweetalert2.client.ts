import Swal, { SweetAlertOptions } from "sweetalert2";

export default defineNuxtPlugin((nuxtApp) => {
  const options: SweetAlertOptions = {
    buttonsStyling: false,
    showLoaderOnConfirm: true,
    showCancelButton: false,
    heightAuto: false,
  };

  const swal = Swal.mixin(options);

  return {
    provide: {
      swal,
    },
  };
});
