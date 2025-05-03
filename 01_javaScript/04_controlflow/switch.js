let fruit = "aam"

switch(fruit){
    case "apple" :
    console.log(`This fruit is ${fruit}`);
    break;

    case "banana" :
    console.log(`This fruit is ${fruit}`);
    break;

    case "guava" :
    console.log(`This fruit is ${fruit}`);
    break;

    case "mango" :
    console.log(`This fruit is ${fruit}`);
    break;

    default:
    console.log(`We dont know the fruit: ${fruit}`);
    break;
}

const expr = "Mangoes";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
