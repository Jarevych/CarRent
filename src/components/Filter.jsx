import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

export const  Filter = () => {
    const [brand, setBrand] = useState(null);
    const [price, setPrice] = useState(null);
    const [mileageFrom, setMileageFrom] = useState(null);
    const [mileageTo, setMileageTo] = useState(null);
    const cars = useSelector((state) => state.catalog.items);
    const dispatch = useDispatch();
  
    console.log(cars)
    const handleSearch = () => {
        dispatch(setBrand(brand));
        dispatch(setPrice(price));
        dispatch(setMileageFrom(mileageFrom));
        dispatch(setMileageTo(mileageTo));
    }

    const brands = cars?.map((car) => car.make);
    const uniqueBrands = [...new Set(brands)];
    const rentPrice = [...new Set(cars?.map((car) => car.rentalPrice))];
    const sortedRentPrice = rentPrice.sort((a, b) => {
      const priceA = parseInt(a.slice(1)); // Перетворення рядка на число та видалення символу "$"
      const priceB = parseInt(b.slice(1)); // Перетворення рядка на число та видалення символу "$"
      return priceA - priceB; });// Порівняння чисел
  
  return (
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
      <button type="button" className="search-btn" onSubmit={handleSearch}> Search </button>
      </div>

  )
}
