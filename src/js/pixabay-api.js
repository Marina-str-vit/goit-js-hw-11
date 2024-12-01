import iconReject from '../img/Group_rej.png'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "47392107-146a4706033000661fe0e92fb";

const form = document.querySelector(".js-search-form "); // форма
const container = document.querySelector(".image-cards");
// createPromise(delay, state)
//     .then(delay => {
     
//     })
//     .catch(delay => {
//       iziToast.error({
//         position: 'topRight',
//         iconUrl: iconReject,
//         backgroundColor: '#EF4040',
//         title: 'Error',
//         titleColor: 'white',
//         timeout: delay,
//         messageColor: 'white',
//         message: 'Sorry, there are no images matching your search query. Please try again!',
//       });
//     });
//   //для очищення форми!!
//     document.querySelector('.form').reset();
// }