import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `${baseURL + endpoint}`,
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data.channels);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, refetch };
};
