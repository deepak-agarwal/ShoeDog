import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import ProductScreen from './src/screens/ProductScreen.js'
import ProductDetails from './src/screens/ProductDetails.js'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      <ProductDetails />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})
