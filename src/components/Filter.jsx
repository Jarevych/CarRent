import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { setBrand, setPrice } from '../redux/filterSlice';
import { updateFilters } from '../redux/filterSlice';
import { StyledContainer } from './FilterStyled';


export const Filter = () => {
  const [selectedCarBrand, setSelectedCarBrand] = useState({
    label: '',
    value: '',
  });
  const [selectedCarRent, setSelectedCarRent] = useState("");
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState(null);
  const cars = useSelector(state => state.catalog.items);
  const dispatch = useDispatch();

  
  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      updateFilters({
        brand: selectedCarBrand,
        price: selectedCarRent,
        mileageFrom,
        mileageTo,
      })
    );
  };

  const brands = cars?.map(car => car.make);
  const uniqueBrands = [...new Set(brands)];
  const rentPrice = [...new Set(cars?.map(car => car.rentalPrice))];
  const sortedRentPrice = rentPrice.sort((a, b) => {
    const priceA = parseInt(a.slice(1)); // Перетворення рядка на число та видалення символу "$"
    const priceB = parseInt(b.slice(1)); // Перетворення рядка на число та видалення символу "$"
    return priceA - priceB;
  });


  return (
    <StyledContainer>
      <form onSubmit={onSubmit} className="section">
        <div className="filter">
          <label htmlFor="brand">Car Brand</label>
          <select
            name="brand"
            id="brand"
            value={selectedCarBrand.value}
            className="filter-item"
            onChange={e => setSelectedCarBrand(e.target.value)}
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
          <label htmlFor="price" className="input">
            Price/ 1 hour
          </label>
          <select
            name="price"
            id="price"
            value={selectedCarRent.label}
            className="filter-item"
            onChange={e => setSelectedCarRent(e.target.value)}
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
            <label htmlFor="mileageFrom" className="input ">
              Сar mileage / km
            </label>
            <input
              name="mileageFrom"
              id="mileageFrom"
              value={mileageFrom}
              className="filter-item input-from"
              onChange={e => setMileageFrom(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              name="mileageTo"
              id="mileageTo"
              value={mileageTo}
              className="filter-item input-to"
              onChange={e => setMileageTo(e.target.value)}
            ></input>
          </div>
        </div>
        <button type="submit" className="search-btn">
          
          Search
        </button>
      </form>
    </StyledContainer>
  );
};
