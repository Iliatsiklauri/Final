import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((error) => setError(error));
  }, []);
  return { data, error };
}
