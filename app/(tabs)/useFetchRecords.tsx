import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BitcoinData } from '@/constants/types';


const useFetchRecords =  (url: string) => {

  const [data, setData] = useState<BitcoinData | null>(null);
  const [error, setError] = useState<(string | null)>(null);
  const [loading, isLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

    try {  
        const localData = await AsyncStorage.getItem('bitcoindata')
        if (localData) {
          console.log('Data fetched from AsyncStorage:', JSON.parse(localData));
          setData(JSON.parse(localData))
          isLoading(false)
        }
        else {
          const response = await fetch(url);

          if (!response.ok)
            throw new Error("Failed to post product");
          const result: BitcoinData = await response.json();
          setData(result);
          await AsyncStorage.setItem('bitcoinData', JSON.stringify(result));
          isLoading(false);
        }
      } catch (error) {
        setError("Somethig went wrong")
        isLoading(false)
      }
    }
    fetchData()
}, [url]);


  return (
    { data, error , loading}
  )

}
export default useFetchRecords;
























// import { useState } from "react";

// const usePostProduct = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [data, setData] = useState(null);

//   const postProduct = async (product: {
//     title: string;
//     price: number;
//     image: string;
//     description: string;
//     available: boolean;
//   }) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("https://foodapi-zohaib.vercel.app/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(product),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to post product");
//       }

//       const result = await response.json();
//       setData(result);
//     } catch (error: any) {
//       setError(error.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { postProduct, loading, error, data };
// };

// export default usePostProduct;



