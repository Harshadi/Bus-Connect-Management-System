import * as React from 'react';
import {Text, View, TextInput,Button,Image , StyleSheet} from 'react-native';
import {useState, useEffect} from 'react'
import axios from 'axios';
import arrow from '../../assets/Icon feather-arrow-right.svg';
import calendar from '../../assets/Icon awesome-calendar-alt.svg'

function SearchResults({route, navigation}) {

const [text, setText] = useState('');
const [origin, setOrigin] = useState('');
const [destination, setDestination] = useState('');
const [departureDate, setDepartureDate] = useState('');
const [passenger, setPassenger] = useState('');
const [db, setDb] = useState([]);
const [apiInitial, setApiInitial] = useState('');
const { params } = route.params;


useEffect(()=>{
setOrigin(params.origin)
setDestination(params.destination)

axios
.get(`http://3.109.160.178:8082/api/v1/bus/bussource/${apiInitial}`)
.then((reponse)=>{

setDb(reponse.data.Responses)
})


}, [apiInitial]);


const onChangeText=()=>{

console.log('text enter')
}

  return (
<View>
<View style={{backgroundColor: '#F5F5F5', height: 1000+'em'}}>
 

<View style={styles.routeCard}>
<View style = {styles.inputsection}>
<Text>{params.origin}</Text>
<img src={arrow} style={{width: 40, height: 14, marginTop:4}} />
<Text>{params.destination}</Text>

<img src={calendar} style={{width: 40, height: 14, marginTop:4}} />

<Text style={{ marginLeft: 100}}>Modify Search</Text>
<Text style={{ marginLeft: 50}}>Bus Matrix</Text>
<Text style={{ marginLeft: 50}}>Action</Text>

</View>


</View>



</View>
</View>
  );
}


const styles = StyleSheet.create({

bookYourBus: {
fontFamily: 'Open Sans', 
fontWeight: 'bold', 
fontSize : 18+'px', 
color: '#483191', 
lineSpacing : 24, 
textAlign: 'center', 
characterSpacing: 0
},
routeCard:{
top: 185,
left: 40 ,
width: 1286,
height: 500,
backgroundColor: '#FFFFFF',
background: '#FFFFFF'+ 0+'%'+ 0+'%' +'no-repeat' +'padding-box',
borderRadius: 8,
textAlign: 'center',
opacity: 1
},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 500,
    flex: 1
  },
inputsection:{
flex: 1,
flexDirection: 'row'
}
});



export default SearchResults;
