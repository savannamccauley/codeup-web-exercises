// let i = 1;
// while(i <65536){
//     i *= 2
//     console.log(i);
// }

let conesBought =Math.floor(Math.random() * 5) + 1;

let allCones;
do {
    let allCones = Math.floor(Math.random() * 50) + 50;
    if(allCones < conesBought) {
        console.log("Not enough inventory");
        continue;
    }
    allCones -= conesBought;
    console.log(conesBought + " cones sold")
}while(allCones > 0)
    console.log("Yay, sold out");




