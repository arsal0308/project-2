
const cars = [
    {id: 125223, car: 'Lamborghini Aventador SVJ', available: true},
    {id: 127904, car: 'Ferrari 812 Superfast', available: false},
    {id: 139608, car: 'Porsche Carrera GT', available: false}
  ];


function create(car) {
    car.id = Date.now() % 1000000;
    car.available = true;
    cars.push(car);
  }

function getOne(id) {
    id = parseInt(id);
    return cars.find(car => car.id === id);
}

function getAll() {
    return cars;
  }

module.exports = {
    getAll,
    getOne,
    create
  };
  