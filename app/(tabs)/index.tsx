import React from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import useFetchRecords from './useFetchRecords';
import { Currency } from '@/constants/types';

const index = () => {
  const {data , loading , error} =useFetchRecords("https://api.coindesk.com/v1/bpi/currentprice.json");
  const currencies: Currency[] = data ? Object.values(data.bpi) : [];
  return (
    <View>
      <FlatList
      data={currencies}
      keyExtractor={(item) => item.code}
      renderItem={({item})=>(
        <View style={{ padding: 10 }}>
            <Text>{item.description} ({item.code}): {item.symbol} {item.rate}</Text>
          </View>
      )
      }/>
    </View>
  )
}

export default index;






























// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Switch, ScrollView, Alert } from 'react-native';
// import usePostProduct from './usePostProduct';

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     title: '',
//     price: 0,
//     image: '',
//     description: '',
//     available: false,
//   });

//   const { postProduct, loading, error, data } = usePostProduct();

//   const handleSubmit = () => {
//     postProduct(product);
//     Alert.alert('Product Submitted');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Add Product</Text>
//       <View style={styles.form}>
//         <TextInput
//           style={styles.input}
//           placeholder="Title"
//           value={product.title}
//           onChangeText={(text) => setProduct({ ...product, title: text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Price"
//           keyboardType="numeric"
//           value={product.price.toString()}
//           onChangeText={(text) => setProduct({ ...product, price: +text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Image URL"
//           value={product.image}
//           onChangeText={(text) => setProduct({ ...product, image: text })}
//         />
//         <TextInput
//           style={styles.textarea}
//           placeholder="Description"
//           value={product.description}
//           multiline
//           numberOfLines={4}
//           onChangeText={(text) => setProduct({ ...product, description: text })}
//         />
//         <View style={styles.checkboxLabel}>
//           <Text style={{ marginRight: 10 }}>Available:</Text>
//           <Switch
//             value={product.available}
//             onValueChange={(value) => setProduct({ ...product, available: value })}
//           />
//         </View>
//         <Button title={loading ? 'Submitting...' : 'Submit'} onPress={handleSubmit} disabled={loading} />
//         {error && <Text style={styles.error}>Error: {error}</Text>}
//         {data && <Text style={styles.success}>Product added successfully!</Text>}
//       </View>
//     </ScrollView>
//   );
// };

// // Styling for React Native
// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     // backgroundColor: '#f5f5f5',
//   },
//   title: {
//     marginBottom: 20,
//     fontSize: 24,
//     color: 'black',
//   },
//   form: {
//     width: '100%',
//     maxWidth: 400,
//     backgroundColor: '#fff',
//     padding: 20,
//     // borderRadius: 8,
//     // elevation: 3, // For shadow on Android
//     // shadowColor: '#000',
//     // shadowOpacity: 0.2,
//     // shadowOffset: { width: 0, height: 2 }, // For shadow on iOS
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 4,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     fontSize: 16,
//   },
//   textarea: {
//     width: '100%',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 4,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     fontSize: 16,
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   checkboxLabel: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   error: {
//     color: 'red',
//     marginTop: 10,
//     fontSize: 14,
//   },
//   success: {
//     color: 'green',
//     marginTop: 10,
//     fontSize: 14,
//   },
// });

// export default AddProduct;
