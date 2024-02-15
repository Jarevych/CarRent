import fetchAllCars from '../api'


export default function carItem() {
    const car = fetchAllCars()
  console.log(car)
    return (
    <div>
        <ul>
    <li key={car.id} className="car-item">
    <img
      src={car.img}
      alt={`${car.make} ${car.model}`}
      style={{ maxWidth: "469px" }}
    />
    <h2>
      {car.make} {car.model} {car.year}
    </h2>
    <div className="car-main-data">

    <p>{car.address.split(",")[1]?.trim()}, {car.address.split(",")[2]?.trim()}</p>
    <p>Id: {car.id}</p>
    <p>Year: {car.year}</p>
    <p>Type: {car.type}</p>
    <p>Fuel Consumption: {car.fuelConsumption}</p>
    <p>Engine Size: {car.engineSize}</p>
    </div>
    <p>Description: {car.description}</p>
    <h3>Specifications:</h3>
    <ul>
      <li>Fuel Consumption: {car.fuelConsumption} L/100km</li>
      <li>Engine Size: {car.engineSize}</li>
      <li>Mileage: {car.mileage} km</li>
    </ul>
 
        <h3>Accessories and functionalities:</h3>
        <ul>
          {car.accessories.map((accessory, index) => (
            <li key={index}>{accessory}</li>
          ))}
          </ul>
          </li>
          </ul>
      </div>
    );
          }
          


