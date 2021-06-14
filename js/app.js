// async loadPdf(path: string) {
//   return new Promise<string>((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', path, true);
//     request.responseType = 'blob';
//     request.onload = () => {
//       const reader = new FileReader();
//       reader.onload = (e) => resolve(e.target.result);
//       reader.onerror = err => reject(err);
//       reader.readAsDataURL(request.response);
//     };
//     request.send();
//   });
// }
// this.pdfSrc = await this.loadPdf('file:///path/to/file.pdf');


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js');
// }

// document.querySelector('#show').addEventListener('click', () => {
//   const iconUrl = document.querySelector('select').selectedOptions[0].value;
//   let imgElement = document.createElement('img');
//   imgElement.src = iconUrl;
//   document.querySelector('#container').appendChild(imgElement);
// });