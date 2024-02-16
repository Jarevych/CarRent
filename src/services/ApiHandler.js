import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

axios.defaults.baseURL = "https://653e0e33f52310ee6a9a81ce.mockapi.io/";

export const fetchAllCars = createAsyncThunk('catalog/fetchAllCars', 
async(_, {thunkAPI}) => {
    try {
        const response = await axios.get('/advert?page=1&limit=12');

        return response.data
    } catch (error) {
        
    }
}
);