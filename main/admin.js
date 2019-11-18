import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Container, Item, Label, Form } from "native-base";
import {
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import * as firebase from "firebase";
const background = require("../assets/i.jpg");

class Admin extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  // signUp = async (email, password) => {
  //   try {
  //     if (this.state.password.length < 6) {
  //       alert("password too short");
  //       return;
  //     }
  //     await firebase.auth().createUserWithEmailAndPassword(email, password);
  //     var user = firebase.auth().currentUser;
  //     user.sendEmailVerification().then(console.log("emailsent"));
  //     alert(
  //       `Verification mail has been sent to ${
  //         user.email
  //       }. Please verify and click verify`
  //     );
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  //   //this.props.navigation.navigate("Home");
  // };
  logIn = async (email, password) => {
    try {
        var self = this;
      await firebase.auth().signInWithEmailAndPassword(email, password).then(Object=>{console.log(Object.user.uid);
        if(Object.user.uid==='bDecsrixDfhkJQ0m5eKbo99KXjm2')
        this.props.navigation.navigate('tab')});
      

     
    } catch (error) {
      console.log(error.toString());
    }
  };
  render() {
    return (
      <ImageBackground
        source={background}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={styles.container}>
      <Image style={styles.bgImage} source={background}/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({email})}/>
        <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}/>
        <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
      </View>

     <Text></Text>
      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}   onPress={() => this.logIn(this.state.email, this.state.password)}>
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>


     
    </View>
        {/* <View style={{ flex: 1, justifyContent: "center" }}>
          <View>
            <Item floatingLabel>
              <Label style={{ color: "white" }}>Email</Label>
              <Input
                autoCapitalize='none'
                onChangeText={email => this.setState({ email })}
                style={{ color: "#rgba(241, 231, 254, 1)" }}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{ color: "white" }}>Password</Label>
              <Input
                autoCapitalize='none'
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                style={{ color: "#rgba(241, 231, 254, 1)" }}
              />
            </Item>
            <Button
              full
              rounded
              danger
              style={{ marginTop: 15 }}
              onPress={() => this.logIn(this.state.email, this.state.password)}
            >
              <Text>Sign In</Text>
            </Button>
           
          </View>
        </View> */}
      </ImageBackground>
    );
  }
}
export default Admin;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,

  //   justifyContent: "center"
  // }
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "blue",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold'
  }
});
