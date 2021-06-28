let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];


function countOccurrences(vehicles) {
  let vehicleObj = {};

  vehicles.forEach(vehicle => {
    if (vehicleObj.hasOwnProperty(vehicle)) {
      vehicleObj[vehicle] += 1;
    } else {
      vehicleObj[vehicle] = 1;
    }
  });

  print(vehicleObj);

  return vehicleObj;
}

function print(obj) {
  for (const item in obj) {
    console.log(`${item} => ${obj[item]}`);
  }

  return obj;
}

countOccurrences(vehicles);