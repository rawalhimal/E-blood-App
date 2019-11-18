
import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Button, Text, Alert,TouchableOpacity,ImageBackground,Dimensions,Image } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
const myBackground = require("../assets/profile1.jpg");
const background = require("../assets/acceptor.jpg");
export default class Feed extends Component
{
    constructor(props) {
      
        super(props)
        
        this.state = {
           
           UserName: "",
           Useraddress: "",
           Useremail: "",
           Bloodgroup: "",
           Mobilenumber: "",
           DateOfBirth: "",
         };
     
      }
   static navigationOptions =
   {
      title: 'Welcome to Home',
    
   };
   
 
   render()
   {
 
    // const {goBack} = this.props.navigation;
 
      return(
        <ImageBackground
                source={myBackground}
                style={{ width: "100%", height: "100%" }}
              >
         
        
   <View style = { styles.MainContainer }>
         <View style={styles.container}>
          <View style={styles.header}>
          </View>
          {/* <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/> */}
          <Image style={styles.avatar} source={background}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              {/* <Text style={styles.name}>John Doe</Text>
               */}
               <Text></Text>
                <Text style = {{fontSize:20,fontWeight:'bold',color:'black'}}> { this.props.navigation.state.params.Name } </Text> 
           
            </View>
        </View>
      </View>
            {/* <Text style = {styles.TextComponentStyl}>Name</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Name } </Text>  */}
          <Text></Text>
            <Text style = {styles.TextComponentStyl}>Address</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Address } </Text>
            {/* <Text style = {styles.TextComponentStyl}>Email</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text> */}
            <Text style = {styles.TextComponentStyl}>Blood Group</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Blood } </Text>
            <Text style = {styles.TextComponentStyl}>Mobile Number</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Mobile } </Text>
            <Text style = {styles.TextComponentStyl}>Age</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Date } </Text>
            {/* <Button title="Delete Account" onPress={ () => goBack(null) } /> */}
            <Button title="Log out" onPress={ () =>this.props.navigation.navigate('Landing') } />
         </View>
         </ImageBackground>
      );
   }
}
  Feed.navigationOptions={ 
    tabBarLabel:'Profile',  
    tabBarIcon: ({ tintColor }) => (  
        <View>  
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
        </View>),  
}  
const styles = StyleSheet.create({
 
    MainContainer :{
     
      justifyContent: 'center',
      flex:1,
      margin: 10
    },
   
    TextComponentStyle: {
        fontSize: 14,
       color: "black",
       textAlign: 'center', 
       marginBottom: 15,
       fontWeight:'bold'
      },
      TextComponentStyl: {
        fontSize: 19,
       color: "#00BFFF",
       textAlign: 'center', 
       marginBottom: 15,
       fontWeight:'bold',
       fontStyle:"italic",
      },
      TextInputStyleClasss:{
     justifyContent:"center",
      },
      TouchableOpacityStyle:{
        backgroundColor:"red",
      },
      header:{
        backgroundColor: "#00BFFF",
        height:180,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      }
     
    });
    