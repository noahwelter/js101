let vehicles = ['car', 'Car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'Truck'];


function countOccurrences(vehicles) {
  let vehicleObj = {};

  vehicles.forEach(vehicle => {
    if (vehicleObj.hasOwnProperty(vehicle.toUpperCase())) {
      vehicleObj[vehicle.toUpperCase()] += 1;
    } else {
      vehicleObj[vehicle.toUpperCase()] = 1;
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