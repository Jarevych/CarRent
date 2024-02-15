import { useEffect, useState } from "react";
import { fetchAllCars } from "../api";
import { StyledContainer } from "./HomePageStyled";

export default function HomePage() {
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState(null);
  const [mileageTo, setMileageTo] = useState(null);

  const [cars, setCars] = useState(null);

  const showCars = async () => {
    try {
      const response = await fetchAllCars();
      setCars(response);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    showCars();
  }, []);
  const carsArr = Array.isArray(cars) && cars.length;

  const brands = cars?.map((car) => car.make);
  const uniqueBrands = [...new Set(brands)];
  const rentPrice = [...new Set(cars?.map((car) => car.rentalPrice))];
  const sortedRentPrice = rentPrice.sort((a, b) => {
    const priceA = parseInt(a.slice(1)); // Перетворення рядка на число та видалення символу "$"
    const priceB = parseInt(b.slice(1)); // Перетворення рядка на число та видалення символу "$"
    return priceA - priceB; // Порівняння чисел
  });
  console.log(rentPrice);

  return (
    <StyledContainer>
      <div className="filter">
        <div>
        <label htmlFor="brand" >Car Brand</label>
        <select
          name="brand"
          id="brand"
          value={brand}
          className="filter-item"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">All</option>
          {uniqueBrands ? (
            uniqueBrands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))
          ) : (
            <option value="">Loading...</option>
          )}
        </select>
      </div>
      <div>
        <label htmlFor="price" className="input">Price/ 1 hour</label>
        <select
          name="price"
          id="price"
          value={price}
          className="filter-item"
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">All</option>
          {sortedRentPrice.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
      <div className="mileage-item">
      <div>
        <label htmlFor="mileageFrom" className="input ">Сar mileage / km</label>
        <input
          name="mileageFrom"
          id="mileageFrom"
          value={mileageFrom}
          className="filter-item input-from"
          onChange={(e) => setMileageFrom(e.target.value)}
        >
          {/* <option value="">All</option> */}
        </input>
        </div>
        <div>
        <input
          name="mileageTo"
          id="mileageTo"
          value={mileageTo}
          className="filter-item input-to"
          onChange={(e) => setMileageTo(e.target.value)}
        >
          {/* <option value="">All</option> */}
        </input>
      </div>
      </div>
      <button type="button" className="search-btn"> Search </button>
      </div>

      {/* <h2>Cars for rent</h2> */}
      <ul className="cars-list">
        {carsArr &&
          cars.map((car) => (
            <li key={car.id} className="car-item">
              <div className="item-img">
                <img
                  src={car.img}
                  alt={`${car.make} ${car.model}`}
                  style={{ height: "280px" }}
                />
              </div>
              <div className="item-title">
                <h2 className="item-title-text">
                  {car.make}, <span className="span-color">{car.year}</span>
                </h2>
                <h2 className="item-title-text">{car.rentalPrice}</h2>
              </div>
              <div className="car-main-data">
                {car.address && (
                  <>
                    {car.address.split(",")[1]?.trim()} | {" "}
                    {car.address.split(",")[2]?.trim()} | {car.rentalCompany} | {car.type} | {" "}
                    
                    {car.model} | {car.id} | {car.accessories[0]}
                    {/* {Array.isArray(car.accessories) &&
                      car.accessories.length > 0 && (
                        <>
                          <ul>
                            <li>{car.accessories[0]}</li>
                          </ul>
                        </>
                      )} */}
                  </>
                )}
              </div>
              <button type="button" className="lear-btn">
                Learn more
              </button>
              {/* {Array.isArray(car.functionalities) &&
                car.functionalities.length > 0 && (
                  <>
                                        <ul>
                      {car.functionalities.map((functionality, index) => (
                        <li key={index}>{functionality}</li>
                      ))}
                    </ul>
                  </>
                )} */}
              {/* <p>Rental Conditions: {car.rentalConditions}</p> */}
              {/* <h3>Rental Information:</h3> */}
              {/* <p>Minimum age: 25</p>
              <p>Valid driver's license</p>
            <p>Security deposit required</p> */}
              {/* <p>Mileage: {car.mileage}</p>
              <p>Price: {car.rentalPrice} </p> */}
              {/* <p>Rental Company: {car.rentalCompany}</p> */}
            </li>
          ))}
      </ul>
    </StyledContainer>
  );
}
