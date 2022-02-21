import * as React from 'react';
import {Text, View, TextInput,Button, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react'
import axios from 'axios';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';


function LandingScreen({navigation}) {

const [text, setText] = useState('');
const [origin, setOrigin] = useState('');
const [destination, setDestination] = useState('');
const [departureDate, setDepartureDate] = useState('');
const [passenger, setPassenger] = useState('');
const [db, setDb] = useState([]);
const [apiInitial, setApiInitial] = useState('');

useEffect(()=>{

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
  <Text style ={styles.bookYourBus}>
Book Your Bus
</Text>

<View style={styles.routeCard}>
<Text style={{textAlign: 'left', marginLeft: 10, size: 16, color: '#483191', opacity: 1,marginTop: 10,  width:47, height: 22, font: 'normal'+'normal'+ 600+16+'Open Sans'}}>Origin</Text>
<View style = {styles.inputsection}>

<label>Origin
<input list="browsers" name="myBrowser" onChange={((e)=>{setOrigin(e.target.value); setApiInitial(e.target.value)})}/></label>
<datalist id="browsers">
  {
db.map((item)=>(
<option value={item.name} key ={item.key}/>

))
}
</datalist>

<label>Destination
<input list="browsers" name="myBrowser" onChange={((e)=>{setDestination(e.target.value); setApiInitial(e.target.value)})}/></label>
<datalist id="browsers">
  {
db.map((item)=>(
<option value={item.name} key ={item.key}/>

))
}
</datalist>
{/*
 <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
</ Stack >
 
*/}

<TextInput
 style={styles.input}
        onChangeText={onChangeText}
 placeholder="Passenger(s)"
        value={text}
      />

</View>

<Button style={{height:50+'em'}}
onPress={(()=>{
navigation.navigate('searchResults',{
params: {
origin : origin,
destination : destination
}
})

})}
>

Search Buses
</Button>


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



export default LandingScreen;
