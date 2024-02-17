import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCars } from "../services/ApiHandler";
import { StyledContainer } from "./CatalogStyled";
import { Filter } from "../components/Filter";
import { ReactComponent as IconActive } from '../assets/favor-active.svg'
import { ReactComponent as IconNormal } from '../assets/favor-normal.svg'
import { toggleFavorite } from "../redux/CatalogSlice";

const Catalog = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.catalog.favoriteId)


  const cars = useSelector((state) => state.catalog.catalog);
  console.log(cars);
  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const toggleFavor = (itemId) => {
    dispatch(toggleFavorite(itemId))

  }
  const carsArr = Array.isArray(cars) && cars.length;
  // const isFavorite = favorite.includes(car.id)

  return (
    <StyledContainer>
      <Filter/>
      <ul className="cars-list">
        {carsArr &&
          cars.map((car) => (
            <li key={car.id} className="car-item">
              <div className="item-img">
                <button type="button" className="favor" onClick={() => toggleFavor(car.id)}>
                  {favorite.includes(car.id) ? <IconActive/> : <IconNormal/> }
                </button>

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
                    {car.address.split(",")[1]?.trim()} |{" "}
                    {car.address.split(",")[2]?.trim()} | {car.rentalCompany} |{" "}
                    {car.type} | {car.model} | {car.id} | {car.accessories[0]}
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
            </li>
          ))}
      </ul>
    </StyledContainer>
  );
}

export default Catalog