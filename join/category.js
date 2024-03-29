
import * as React from 'react';
import { Alert, Keyboard, Image, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Button } from "native-base";
 
import { ActivityIndicator, ListView, Text, Platform, TouchableOpacity} from 'react-native';
class FetchAllData extends React.Component {
 
constructor(props) {
  super(props);
  this.state = {
      donorid:true,
    isLoading: true
  }
}
componentDidMount() {
  return fetch('http://192.168.208.2/DonorForm/FetchAllData.php')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
       donor_id:false,
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
 
ListViewItemSeparator = () => {
  return (
    <View
      style={{
 
        height: .5,
        width: "100%",
        backgroundColor: "#000",
 
      }}
    />
  );
} 

render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }
 
  return (


 
    <View style={styles.MainContainer}>
      <ListView
 
        dataSource={this.state.dataSource}
 
        renderSeparator= {this.ListViewItemSeparator}
 
        renderRow={(rowData) =>
 
       <View style={{flex:1, flexDirection: 'column',height:330}} >
        
          <Container>
      
        <Content >
          <Card>
            <CardItem style={{justifyContent:'center'}}>
                <Body>
                <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Name</Text>
              <Text style={{textAlign:'center'}}>{' ' + rowData.donor_name}</Text>
                </Body>
            
            </CardItem>
            <CardItem >
              <Body>
              <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Address</Text>
                <Text style={{textAlign:'center'}}>
                {' ' + rowData.donor_address}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Blood Group</Text>
              <Text style={{textAlign:'center'}}>{'  ' + rowData.blood_group}</Text>
                </Body>
            
            </CardItem>
            <CardItem >
              <Body>
              <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Phone Number</Text>
                <Text style={{textAlign:'center'}}>
                {' ' + rowData.phone_number}
                </Text>

              </Body>
              
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Age</Text>
              <Text style={{textAlign:'center'}}>{'  ' + rowData.date_of_birth}</Text>
                </Body>
            
            </CardItem>
          </Card>
        </Content>
      </Container>

 
       </View>
 
        }
      />
 
    </View>
  );
}
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,

backgroundColor: '#00BCD4',
padding: 2,
 
},
 
textViewContainer: {
 
 textAlignVertical:'center', 
 padding:10,
 fontSize: 15,
 color: 'black',
 textAlign:'center',
 
},

 
});
 export default FetchAllData;
//AppRegistry.registerComponent('Project', () => Project);
   
  
              
   



















































































