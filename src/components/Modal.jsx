import { ModalContainer, ModalBackdrop } from './ModalStyled';
import { ReactComponent as IconClose } from '../assets/close.svg';

export const Modal = ({ car, closeModal } ) => {
  console.log(car)   
  return (
    <>
      {car && (
        <ModalBackdrop>
            {/* <div className='modal'> */}
          <ModalContainer>
            <button onClick={() => closeModal()} className='close-btn'><IconClose/></button>
            <img
              src={car.img}
              alt={`${car.make} ${car.model}`}
              style={{ maxWidth: '469px' }}
            />
            <h2>
              {car.make} <span className="span-color">{car.model}</span> {car.year}
            </h2>
            <div className="car-main-data">
           
                
              </div>
              <div className="text">
                {car.address && (
                  <>
                    {car.address.split(',')[1]?.trim()} |{' '}
                    {car.address.split(',')[2]?.trim()} | Id:{car.id} | Year:{car.year} | {''}
                    Type:{car.type} <br/>Fuel Consumption: {car.fuelConsumption} | Engine Size:{car.engineSize}
                  </>
                )}
              </div>
           <h3 className='desc'>{car.description}</h3>
            <h3 className='title'>Accessories and functionalities:</h3>
            <ul className='text'>
              {car.accessories.map((accessory, index) => (
                <p key={index}>| {accessory} &nbsp; </p>
              ))}
            </ul>
            <ul><li>{car.rentalConditions}</li>
            <li>Mileage:{car.mileage}</li>
            <li>Price:{car.rentalPrice}</li>
           </ul>
            <button className='btn' onClick={() => window.open('tel:+380730000000')}>Rental car</button>
          </ModalContainer>
          {/* </div> */}
        </ModalBackdrop>
      )}
    </>
  );
};
