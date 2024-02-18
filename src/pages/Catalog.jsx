import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from '../services/ApiHandler';
import { StyledContainer } from './CatalogStyled';
import { Filter } from '../components/Filter';
import { ReactComponent as IconActive } from '../assets/favor-active.svg';
import { ReactComponent as IconNormal } from '../assets/favor-normal.svg';
import { toggleFavorite } from '../redux/CatalogSlice';
import { ProgressBar } from 'react-loader-spinner'
import { Modal } from '../components/Modal';
// import { filterCatalog } from '../redux/filterSlice'
// import { handleModal } from '../components/Modal'

const Catalog = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.catalog.favoriteId);
  const cars = useSelector(state => state.catalog.items)
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const brandFilter = useSelector((state) => state.filter.brand);
  const priceFilter = useSelector((state) => state.filter.price);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const HandleLoadMore = () => {
    dispatch(fetchAllCars(page + 1)); 
    setPage(prevPage => prevPage + 1); 
  };
  console.log(isLoading)

console.log(cars)
  useEffect(() => {
    if (page === 1) {
      setIsLoading(true);
      dispatch(fetchAllCars(page))
      .then((response) => {
        setIsLoading(false);
      } )
        .catch((error) => {
          console.error('Error fetching cars:', error);
        });
    }
  }, [dispatch, page]);
  const openModal = (car) => {
    setIsModalOpen(true);
    setSelectedCar(car);
  };
  const closeModal = () => {
    setSelectedCar(null);
    setIsModalOpen(false);
  };

const toggleFavor = itemId => {
    dispatch(toggleFavorite(itemId));
  };

  const filteredCars = cars.filter(car => {
    if (brandFilter && car.make !== brandFilter) return false;
    if (priceFilter && !car.rentalPrice.includes(priceFilter)) return false;
    console.log(car.rentalPrice.includes(priceFilter))
    return true;
  });

  const carsArr = Array.isArray(cars) && cars.length;
  console.log(filteredCars)
  return (
    <StyledContainer>
      <Filter />
      {isLoading ? (
  <ProgressBar
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  barColor="#3470ff"
  borderColor="#3470ff"
  />
):(
  <>
  {(filteredCars && filteredCars.length > 0) || (!brandFilter && cars.length > 0) ? (
      <ul className="cars-list">
        {carsArr &&
          filteredCars.map(car => (
            <li key={car.id} className="car-item">
              <div className="item-img">
                <button
                  type="button"
                  className="favor"
                  onClick={() => toggleFavor(car.id)}
                >
                  {favorite.includes(car.id) ? <IconActive /> : <IconNormal />}
                </button>

                <img
                  src={car.img}
                  alt={`${car.make} ${car.model}`}
                  style={{ height: '280px' }}
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
                    {car.address.split(',')[1]?.trim()} |{' '}
                    {car.address.split(',')[2]?.trim()} | {car.rentalCompany} |{' '}
                    {car.type} | {car.model} | {car.id} | {car.accessories[0]}
                 
                  </>
                )}
              </div>
              <button type="button" className="lear-btn" onClick={() => openModal(car)}> 
                 Learn more
              </button>
            </li>
          ))}
      </ul>
  ) : (
    <p>No cars found</p>
      )}
      </>
      )}
      <button className="searchbtn" type="button" onClick={HandleLoadMore}>
        Load more
      </button>

      {isModalOpen && <Modal car={selectedCar} closeModal={closeModal} />}
    </StyledContainer>
  );
};

export default Catalog;
