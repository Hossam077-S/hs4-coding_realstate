import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '8d5500f05bmshebe60f4c602c5f1p17d157jsnd38b0b5e21b4'
        }
    });
    
    return data;
}