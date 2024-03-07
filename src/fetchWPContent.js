import { useState, useEffect } from 'react';

function fetchWPContent(resource) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://your-wordpress-site.com/graphql?resource=${resource}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }

    fetchData();
  }, [resource]);

  return { data, loading };
}