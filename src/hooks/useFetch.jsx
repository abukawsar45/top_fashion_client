import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseURL = "https://top-fashion-server.vercel.app";

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(baseURL + url)
      setData(res.data)

    } catch (error) {
      setError(error.message || 'Something went wrong happened! ')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [url])
  return {baseURL, data, error, fetchData, loading};
}

export default useFetch;