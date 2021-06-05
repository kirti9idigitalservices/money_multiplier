import { View,StyleSheet,Text, Button,Image, TouchableOpacity,TextInput} from "react-native";
import React from 'react';

var Cf4=()=>{
    return(

         <View style={styles.container}>
             

             <View style={{height:250,width:"90%",marginTop:130,marginLeft:"5%",backgroundColor:"white",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",}}>
             <Image source={require('../images/cf.jpg')} style={{height:190,width:190}}/>
             <Text style={{fontSize:20,fontWeight:"bold",marginLeft:5,
              textShadowOffset: {width: 1.5, height: 1.5},
              textShadowRadius: 7,
              textShadowColor: 'grey',
            
            
            }}>Call Transfer</Text>
             </View>
             <View style={{height:170,width:"90%",marginTop:40,marginLeft:"5%",backgroundColor:"white",borderRadius:10,alignItems:"center"}}>
             <Text style={{fontSize:13,marginTop:130,marginLeft:10,
              textShadowOffset: {width: 1.5, height: 1.5},
              textShadowRadius: 7,
              textShadowColor: 'grey',            
            fontWeight:'100'
            }}>Call Transfer</Text>
          
            </View>

            
            
          
         </View>

    )
}
var styles=StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"white"
    },
    Textinput:{
        width:"100%",
        backgroundColor:"white",
        borderRadius:5,
        height:35,marginTop:25
    }
})

export default Cf4;