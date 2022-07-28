function registerSW()
{
if ('serviceWorker' in navigator) {  //cek browser support serviceWorker      
	navigator.serviceWorker.register('/firebase-messaging-sw.js')
			 .then(function (reg) {            //Berhasil terdaftar            
				 console.log('Terdaftar pada scope' + reg.scope)
			 }).catch(function (error) {       //Gagal Terdaftar            
		console.log('Gagal :' + error)
	});
} else {
	console.log('Browser tidak support SW')
}}

document.addEventListener('DOMContentLoaded', async function () {

	const elems = document.querySelectorAll('.sidenav');
	const instances = M.Sidenav.init(elems, {});

	$('.sidenav').sidenav();
	registerSW();
});