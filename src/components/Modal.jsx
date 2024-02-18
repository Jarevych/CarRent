import { useState } from "react";
import { useSelector } from "react-redux";

export const Modal = ({ selectedCar, closeModal }) => {
    return (
        <>
            {selectedCar && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedCar.img} alt={`${selectedCar.make} ${selectedCar.model}`} style={{ maxWidth: "469px" }} />
                        <h2>{selectedCar.make} {selectedCar.model} {selectedCar.year}</h2>
                        {/* Додайте інші дані автомобіля тут */}
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};
