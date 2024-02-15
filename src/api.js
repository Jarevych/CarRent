import axios from 'axios';

const API_URL = "https://653e0e33f52310ee6a9a81ce.mockapi.io/advert";

export async function fetchAllCars() {
    try {
        const response = await axios.get(
            `${API_URL}/advert?page=3&limit=12`,
// "https://653e0e33f52310ee6a9a81ce.mockapi.io/advert/advert?page=1&limit=10",
            );

        if(response.status !== 200 ) {
            throw new Error('there is no result')
        }
        console.log(response)
        return response.data
    } catch (error) {
        
    }
}