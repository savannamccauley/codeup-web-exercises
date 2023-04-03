// function geocode(search, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//             // to get all the data from the request, comment out the following three lines...
//         }).then(function(data) {
//             return data.features[0].center;
//         });
// }
//

const MAPBOX_TOKEN = "pk.eyJ1Ijoic21jY2F1bGV5MTgiLCJhIjoiY2xmdjdiZzVuMDRibTNsbzNmZndldWVqaiJ9.ibpOdpfwfmrwtVcqHVYlDQ";

console.log("hello");