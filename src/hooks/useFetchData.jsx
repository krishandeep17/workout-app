import { useEffect, useState } from "react";

export default function useFetchData(url, host) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
            "X-RapidAPI-Host": host,
          },
        });

        if (!response.ok)
          throw new Error("😥 Something went wrong with fetching exercises!");

        const result = await response.json();

        setData(result);
        setErrorMessage("");
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, host]);

  return { data, isLoading, errorMessage };
}
