
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
      
      <View style={styles.box1}>
        <Text style={styles.justtext}>Square 1</Text>
      </View>

      <View style={styles.box2}>
        <Text style={styles.justtext}>Square 2</Text>
      </View>

      <View style={styles.box3}>
        <Text style={styles.justtext}>Square 3</Text>
      </View>

      <View><Text style={styles.justtext}>thay doi appp thu </Text> </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    
  },
  box1: {
    backgroundColor: '#7BE0F9',
    width: 100,
    height:100,
    justifyContent: 'center',
    alignItems:'center',
    
  },
  box2: {
    backgroundColor: '#4cc2c2',
    width: 100,
    height:100,
    justifyContent: 'center',
    alignItems:'center',
  },
  box3: {
    backgroundColor: '#ff637c',
    width: 100,
    height:100,
    justifyContent: 'center',
    alignItems:'center',
  },
  justtext:{
    fontSize:12
  },
});
