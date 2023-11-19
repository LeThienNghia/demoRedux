import { StyleSheet, Text, View , Image, Pressable} from 'react-native';
import { useState } from 'react';
import { connect } from 'react-redux';
import {store} from './Redux/Store'
import { increment, decrement } from './Redux/Actions';

function Counter({count}) {
    var [count, setCount] = useState(0)
  
  return (
    <View style={styles.container}>
      
        <View style = {{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen', padding: 10, borderRadius: 20}}>
        <Pressable onPress={() => {
          store.dispatch(decrement);
          setCount(store.getState().count);
        }}>
          <Image source={require('./assets/tru.png')} style = {{width: 30, height: 30}}></Image>
        
        </Pressable>
          <Text style = {{width: '65%', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{count}</Text>
          <Pressable onPress={() => {
          store.dispatch(increment);
          setCount(store.getState().count);
        }}>
          <Image source={require('./assets/cong.png')} style = {{width: 30, height: 30}}></Image>
        
      </Pressable>

        </View>
    </View>
  );
}
var mapStateToProps = (state)=>({
    count: state.count
})

export default connect(mapStateToProps, null)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
});
