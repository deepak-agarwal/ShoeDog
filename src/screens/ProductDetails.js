import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  Pressable,
  Button
} from 'react-native'
import products from '../data/products'

const ProductDetails = () => {
  const product = products[1]

  const { width } = useWindowDimensions()

  const addToCart = () => {
    console.warn('Add to cart')
  }
  return (
    <View>
      {/* {image carasoule}            */}
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{
                width,
                aspectRatio: 1
              }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.desc}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart  */}
      <Pressable style={styles.button}>
        <Button title='Add to Cart' onPress={addToCart} />
      </Pressable>
      {/* Navigation Icon  */}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  price: {
    fontSize: 16,
    fontWeight: '500'
  },
  desc: {
    marginVertical: 10,
    lineHeight: 20,
    fontWeight: '300'
  },
  button: {
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#000',
    borderRadius: 50
  }
})

export default ProductDetails
