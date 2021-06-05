import { View,StyleSheet,Text, Button,Image, TouchableOpacity,TextInput} from "react-native";
import * as React from 'react';


function Welcome2({ navigation }) {
    return(
        <View style={styles.container}>
            <Image  source={require('../images/Welcome/2.jpeg')} style={{height:"100%",width:"100%"}}/>    
            <Image  source={require('../images/Welcome/6.jpeg')} style={styles.header} /> 
            <Text style={{position:"absolute",fontSize:15,color:"#EAF0F2",top:150,left:110}}>New Era of Earn Money</Text>   
            
                <Image  source={require('../images/Welcome/1.jpeg')} style={styles.header2} /> 
                <View style={{position:"absolute",top:285,left:95}}>
                <Text style={{fontSize:20}}>Invest in</Text>
                    <Text style={{fontSize:30,color:"white"}}>trending</Text>
                   <Text style={{fontSize:20}}>assets</Text>
                </View>
                
               <View style={{display:"flex",flexDirection:"row",height:20,width:40,opacity:1,position:"absolute",top:470,left:"45%",alignItems:"center",justifyContent:"space-between"}}>
                  <TouchableOpacity style={{height:6,top:1,backgroundColor:"white",borderRadius:50,width:6}}></TouchableOpacity>
                  <TouchableOpacity style={{height:6,top:1,backgroundColor:"black",borderRadius:50,width:6}}></TouchableOpacity>
                  <TouchableOpacity style={{height:6,top:1,backgroundColor:"white",borderRadius:50,width:6}}></TouchableOpacity>
                  
               </View>

               <Text style={{position:"absolute",top:505,left:"46%",opacity:0.9,borderRadius:5,color:"white",fontSize:17}}>NEXT</Text>


               <View style={{position:"absolute",top:535,left:"35%",height:33,width:"35%",opacity:0.5,backgroundColor:"white",borderRadius:5}}>
                   <TouchableOpacity style={{height:"100%",width:"100%",alignItems:"center",justifyContent:"center"}} >
                          <Text>Start Earning</Text>
                   </TouchableOpacity>
               </View>
                          
        </View>
    )
}

export default Welcome2;


const styles=StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#EFF2F3"
    },
    header:{
        position:"absolute",
        height:80,
        width:240,
        left:70,
        top:65,
        borderRadius:10
    },
    assets:{
        position:"absolute",
        height:120,
        width:"100%",
        top:"40%",
        backgroundColor:"white",
        display:"flex",
        flexDirection:"row"

    },
    header2:{
     position:"absolute",
        height:150,
        width:150,
        top:255,
        left:"59%",
        borderRadius:10,
    }
   
})