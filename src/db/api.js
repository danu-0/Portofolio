
// import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`);
      return response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }


