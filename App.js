import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import MyButton from './buttons';

export default function App() {


    const [value, setValue] = useState("0");
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);

  const handlepress = (content) => {
    const num = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }
    if (content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("−");
      return;
    }
    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("×");
      return;
    }
    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "−") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };

  return (
      <View style={{flex:1, backgroundColor:'#424F4F'}}>
           
           <View style={{flex:0.1, backgroundColor:'black'}}>
              <Text style={{
                top:15,
                alignSelf:'center',
                fontSize: 30,
                color:'white',
                textTransform:'uppercase',
                letterSpacing:10,
              }}>Calculator</Text>
           </View>

           <View style={{flex:0.35, borderWidth:5,borderRadius:10,borderTopEndRadius:0,borderTopStartRadius:0, flexDirection:'row-reverse'}}>
              <TextInput 
                keyboardType='number-pad'
                showSoftInputOnFocus= {false}
                multiline
                style={{
                  top:20, 
                  fontSize:50,
              }}> {value}</TextInput>
           </View>

           <View style={{flex:0.65}}>
              <View style={{flex:0.2,flexDirection:'row'}}>
                <MyButton text='AC' color='#E62F26' pressHandler= {() =>handlepress('AC')}/>
                <MyButton text='%' color='grey' pressHandler= {() =>handlepress('%')}/>
                <MyButton text='± ' color='grey' pressHandler= {() =>handlepress('±')}/>
                <MyButton text='÷' color='grey'pressHandler= {() =>handlepress('÷')}/>
              </View>
              
              <View style={{flex:0.2,flexDirection:'row'}}>
                <MyButton text='7' color='grey' pressHandler= {() =>handlepress('7')}/>
                <MyButton text='8' color='grey' pressHandler= {() =>handlepress('8')}/>
                <MyButton text='9' color='grey' pressHandler= {() =>handlepress('9')}/>
                <MyButton text='×' color='grey' pressHandler= {() =>handlepress('×')}/>
              </View>
              <View style={{flex:0.2,flexDirection:'row'}}>
                <MyButton text='4' color='grey' pressHandler= {() =>handlepress('4')}/>
                <MyButton text='5' color='grey' pressHandler= {() =>handlepress('5')}/>
                <MyButton text='6' color='grey' pressHandler= {() =>handlepress('6')}/>
                <MyButton text='−' color='grey' pressHandler= {() =>handlepress('−')}/>
              </View>
              <View style={{flex:0.2,flexDirection:'row'}}>
                <MyButton text='1' color='grey' pressHandler= {() =>handlepress('1')}/>
                <MyButton text='2' color='grey' pressHandler= {() =>handlepress('2')}/>
                <MyButton text='3' color='grey' pressHandler= {() =>handlepress('3')}/>
                <MyButton text='+' color='grey' pressHandler= {() =>handlepress('+')}/>
              </View>
              <View style={{flex:0.2,flexDirection:'row'}}>
                <MyButton text='.' color='grey' pressHandler= {() =>handlepress('.')}/>
                <MyButton text='0' color='grey' pressHandler= {() =>handlepress('0')}/>
                <MyButton text='00' color='grey' pressHandler= {() =>handlepress('00')}/>
                <MyButton text='=' color='#1F994D' pressHandler= {() =>handlepress('=')}/>
              </View>
           </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
