import { useState, useEffect } from 'react';
import { ApiUrl } from '@/services/apirest';

export default function useFetchClubData(id) {
  const [clubData, setClubData] = useState(null);

  useEffect(() => {
    const fetchClub = async () => {
      try {
        const url = `${ApiUrl}/show/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setClubData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClub();
  }, [id]);

  return clubData?.data;
}
