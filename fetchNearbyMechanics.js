import axios from 'axios';

const API_KEY = 'AIzaSyCe1x7xnFj_bP7Lqbs7tcNdG11xBjJteM8';
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

async function fetchNearbyMechanics(latitude, longitude) {
  const response = await axios.get(BASE_URL, {
    params: {
      location: `${latitude},${longitude}`,
      radius: 5000,  // Radius in meters
      type: 'car_repair',
      key: API_KEY,
    },
  });

  return response.data.results;
}

export { fetchNearbyMechanics };
