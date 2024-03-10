import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';


export default function fetchWPContent(resource) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.deandivizio.com/graphql?resource=${resource}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }

    fetchData();
  }, [resource]);

  return { data, loading };
}