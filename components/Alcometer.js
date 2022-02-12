import React, {useState, useCallback} from 'react';
import {Text, View, TextInput, Pressable, Button } from 'react-native';
import Radiobutton from './Radiobutton';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../style/style';



export default function Alcometer() {

  const [result, setResult] = useState(0);
  const [weight, setWeight] = useState(0);
  //Radiobutton
  const [gender,setGender] = useState('male');
  const options = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    },
  ];
  


  //Dropdown Picker Bottles
  const [bottleOpen, setBottleOpen] = useState(false);
  const [bottleValue, setBottleValue] = useState(1);
  const [bottleItems, setBottleItems] = useState([
    {label: '1 bottle', value:1},
    {label: '2 bottles',value: 2},
    {label: '3 bottles',value: 3},
    {label: '4 bottles',value: 4},
    {label: '5 bottles',value: 5},
    {label: '6 bottles',value: 6},
    {label: '7 bottles',value: 7},
    {label: '8 bottles',value: 8},
    {label: '9 bottles',value: 9},
    {label: '10 bottles',value: 10},
  ]);

  //Dropdown Picker Time
  const [timeOpen, setTimeOpen] = useState(false);
  const [timeValue, setTimeValue] = useState(1);
  const [timeItems, setTimeItems] = useState([
    {label: '1 hour', value:1},
    {label: '2 hours',value: 2},
    {label: '3 hours',value: 3},
    {label: '4 hours',value: 4},
    {label: '5 hours',value: 5},
    {label: '6 hours',value: 6},
    {label: '7 hours',value: 7},
    {label: '8 hours',value: 8},
    {label: '9 hours',value: 9},
    {label: '10 hours',value: 10},
    {label: '11 hours',value: 11},
    {label: '12 hours',value: 12},
  ]);

  DropDownPicker.setListMode("SCROLLVIEW");

  const onBottleOpen = useCallback( () => {
    setTimeOpen(false);
  }, []);

  const onTimeOpen = useCallback( () => {
    setBottleOpen(false);
  }, []);

  



  //Color change depending on value
  function getResultColor() {
    if(result < 0.3 ) {
       return styles.resultgreen;
    }
    else if(0.6 > result > 0.3 ) {
       return styles.resultyellow;
    }
    else if (result >= 0.6 ) {
       return styles.resultred;
    }
  };

  

  

  // Calculate Function
  function calculate() {
    let outcome=0;
    const litres = (bottleValue*0.33);
    const grams = (litres*8*4.5);
    const burning = weight/10;
    const gramsleft = (grams - burning*timeValue);

    if(gender==='male') {
      outcome=gramsleft/(weight*0.7);
    }else{
      outcome=gramsleft/(weight*0.6);
    };

    if(outcome<0){
      outcome=0;
    };

    if (!weight) {
      alert(
        "Enter weight.",
      );
    }

    setResult(outcome);
  };


  return (
    <View style={styles.container}>
        <Text style={styles.lable}>Weight</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => setWeight(text)}/>

        <Text style={styles.lable}>Bottles</Text>
        <View style={{zIndex: 10, marginHorizontal:15, marginBottom:20}}>
          <DropDownPicker 
          open = {bottleOpen}
          onOpen = {onBottleOpen}
          value = {bottleValue}
          items = {bottleItems}
          setOpen = {setBottleOpen}
          setValue = {setBottleValue}
          setItems = {setBottleItems}
          />
        </View>

        <Text style={styles.lable}>Time</Text>
        <View style={{zIndex: 9, marginHorizontal:15, marginBottom:20}}>
          <DropDownPicker 
          open = {timeOpen}
          onOpen = {onTimeOpen}
          value = {timeValue}
          items = {timeItems}
          setOpen = {setTimeOpen}
          setValue = {setTimeValue}
          setItems = {setTimeItems}
          />
        </View>

        <Text style={styles.lable}>Gender</Text>
        <Radiobutton 
        options={options} 
        onPress={(value) => {setGender(value)}}
        />
      
        <Text style={getResultColor()}>{result.toFixed(2)}</Text>
         
        <Pressable style={styles.button} onPress={calculate}>
        <Text style = {styles.buttonText}>Calculate</Text>
        </Pressable>
        
        
    </View>
  );
}

