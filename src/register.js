import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Button, Text, Alert} from 'react-native';
import {Form,Picker} from "native-base";
//const Background = require("../assets/register.jpg");
export default class register extends Component {
   
 static navigationOptions={
   header:null
 }
constructor() {
 
    super()
 
    this.state = {
     
      Username: "",
      Useraddress: "",
      Useremail: "",
      Bloodgroup: "",
      Mobilenumber: "",
      DateOfBirth: "",
      
 
    }
 
  }

UserRegistrationFunction = () =>{
 
  const { Username}  = this.state ;
  const {  Useraddress }  = this.state ;
  const { Useremail }  = this.state ;
  const {  Bloodgroup }  = this.state ;
  const {  Mobilenumber}  = this.state ;
  const { DateOfBirth }  = this.state ;
  
  var regx1 = /^[7-9]\d{9}$/;
 
 
 

  fetch('http://192.168.208.2/DonorForm/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      donor_id : this.state.Donorid,
      donor_name: this.state.Username,
  
      donor_address: this.state.Useraddress,
  
      email: this.state.Useremail,
      blood_group: this.state.Bloodgroup,
  
      phone_number: this.state.Mobilenumber,
  
      date_of_birth: this.state. DateOfBirth,
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
         
           
if(responseJson === 'User Registered Successfully')
        {
 
       
       this.props.navigation.navigate('Feed', {Name: Username ,Address:Useraddress ,Email:Useremail, Blood:Bloodgroup, Mobile:Mobilenumber, Date:DateOfBirth });
      //this.props.navigation.navigate('Feed', {ID: donor_id,Name: donor_name ,Address: donor_address ,Email: email, Blood: blood_group, Mobile: phone_number, Date:date_of_birth });
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
    } 
 

  
  render() {
    return (
    
<View style={styles.MainContainer}>
      <Text style={styles.title}>Please add following details</Text>

      <TextInput
        placeholder="Enter Name"
      
     
        onChangeText={ donor_name => {this.setState({ Username: donor_name })
      var regx=/^[a-zA-z\s]{3,20}[^0-9]$/
      if(regx.test(donor_name)){
        console.warn("valid")
      }
      else
    console.warn("invalid")}} 
      
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
      />

      <TextInput
        placeholder="Enter address"
       onChangeText={ donor_address => {this.setState({ Useraddress: donor_address })
       var regx=/^[a-zA-z\s]{3,20}[^0-9]$/
       if(regx.test(donor_address)){
         console.warn("valid")
       }
       else
     console.warn("invalid")} }
     
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
      />

    
          <Form style={styles.TextInputStyleClass}>
          
          <Picker
       
      selectedValue={this.state.Bloodgroup}
     
      onValueChange={(itemValue,itemIndex) => this.setState({ Bloodgroup: itemValue})}>
     
              <Picker.Item label="enter blood groups" value=""/>
              <Picker.Item label="A+" value="A+" />
              <Picker.Item label="B+" value="B+"/>
              <Picker.Item label="O+" value="O+"/>
              <Picker.Item label="AB+" value="AB+"/>
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="B-" value="B-"/>
              <Picker.Item label="O-" value="O-"/>
              <Picker.Item label="AB-" value="AB-"/>
          </Picker>
          </Form> 
        
      <TextInput
        placeholder="Enter mobile number"
      onChangeText={ phone_number => {this.setState({ Mobilenumber : phone_number});
              var regx=/^[7-9]\d{9}$/
            if(regx.test(phone_number)===false)
          console.warn('invalid Phone Number')
            else
          {console.warn("valid Phone Number")}}
        }
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
      />

      <TextInput
        placeholder="Enter age"
        onChangeText={ date_of_birth => {this.setState({ DateOfBirth : date_of_birth })
      var regx = /^\d{2}$/ 
      if(regx.test(date_of_birth))
      console.warn("valid Age")
      else console.warn('invalid Age')
      }
      }
  
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
      />

      <Button
      title="Click Here To Register"
      onPress={()=>this.UserRegistrationFunction()}
        color="blue"
    /> 
</View>
            
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  },

  TextInputStyleClass: {
    textAlign: "center",
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: "#2196F3",
    borderRadius: 5,
    color: "black"
  },

  title: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontWeight:"bold",
    fontStyle:"italic",
  },
  TouchableOpacityStyle: {
 
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '100%',
    backgroundColor: 'pink'
 
  },
 
  TextStyle:{
    color:'red',
    textAlign:'center',
  },
 
});

 


