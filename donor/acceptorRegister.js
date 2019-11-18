import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import {
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Container, Item, Label, Input, Form } from "native-base";
import * as firebase from "firebase";

//const background = require("../assets/acceptor.jpg");

class AcceptorRegister extends Component {
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
  signUp = async (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("password too short");
        return;
      }
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      var user = firebase.auth().currentUser;
      user.sendEmailVerification().then(console.log("emailsent"));
      alert(
        `Verification mail has been sent to ${
          user.email
        }. Please verify and click verify`
      );
    } catch (error) {
      console.log(error.toString());
    }
    //this.props.navigation.navigate("Home");
  };
  logIn = async (email, password) => {
    try {
        var self = this;
      await firebase.auth().signInWithEmailAndPassword(email, password);

      firebase.auth().onAuthStateChanged(function(user) {
        if (user.emailVerified) {
           self.props.navigation.navigate("AcceptorSearch")
        } else {
          alert("not verified");
        }
      });
    } catch (error) {
      console.log(error.toString());
    }
  };
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.bgImage} source={{ uri: "https://lorempixel.com/900/1400/nightlife/2/" }}/>
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
      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}  onPress={() => this.signUp(this.state.email, this.state.password)}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>


      <TouchableOpacity  style={[styles.buttonContainer, styles.loginButton]}  onPress={() => this.logIn(this.state.email, this.state.password)}>
          <Text style={styles.loginText}>Verify</Text>
      </TouchableOpacity>
    </View>
      // <ImageBackground
      //   source={background}
      //   style={{ height: "100%", width: "100%" }}
      // >
        /* <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 45
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: "bold", textAlign: "center"}}
          >
            Please Register First
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Form>
            <Item floatingLabel>
              <Label style={{ color: "black",fontWeight:'bold' }}>Email</Label>
              <Input
                autoCapitalize='none'
                onChangeText={email => this.setState({ email })}
                style={{ color: "black" }}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{ color: "black",fontWeight:'bold' }}>Password</Label>
              <Input
                autoCapitalize='none'
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                style={{ color: "black" }}
              />
            </Item>
            <Button
              full
              rounded
              warning
              style={{ marginTop: 15 }}
              onPress={() => this.signUp(this.state.email, this.state.password)}
            >
              <Text>Register</Text>
            </Button>
            <Button
              full
              rounded
              success
              style={{ marginTop: 15 }}
              onPress={() => this.logIn(this.state.email, this.state.password)}
            >
              <Text>Verify</Text>
            </Button>
          </Form>
        </View> */
       
        );
      }
    }
export default AcceptorRegister;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,

  //   justifyContent: "center"
  // },
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
    backgroundColor: "#00b5ec",

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
