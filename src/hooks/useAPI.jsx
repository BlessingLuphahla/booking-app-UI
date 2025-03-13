import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const useAPI = (apiEndpoint, method = "GET") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (method === "GET") {
          const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/api${apiEndpoint}`
          );
          setData(res.data);
        } else if (method === "POST") {
          const res = await axios.post(
            `${import.meta.env.VITE_API_URL}/api${apiEndpoint}`
          );
          setData(res.data);
        } else if (method === "DELETE") {
          const res = await axios.delete(
            `${import.meta.env.VITE_API_URL}/api${apiEndpoint}`
          );
          setData(res.data);
        }
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const reFetchData = async () => {
    setLoading(true);
    try {
      if (method === "GET") {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api${apiEndpoint}`
        );
        setData(res.data);
      } else if (method === "POST") {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api${apiEndpoint}`
        );
        setData(res.data);
      } else if (method === "DELETE") {
        const res = await axios.delete(
          `${import.meta.env.VITE_API_URL}/api${apiEndpoint}`
        );
        setData(res.data);
      }
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { data, loading, error, reFetchData };
};
