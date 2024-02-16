import { useEffect, useState, } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from "../services/ApiHandler";
import { StyledContainer } from "./CatalogStyled";

export default function HomePage() {

  // const [cars, setCars] = useState(null);

  // const showCars = async () => {
  //   try {
  //     const response = await fetchAllCars();
  //     setCars(response);
  //     console.log(response);
  //   } catch (error) {}
  // };

  const dispatch = useDispatch();
  
  const cars = useSelector((state) => state.catalog.catalog);
console.log(cars)
  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);


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
