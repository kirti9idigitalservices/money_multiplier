import { View,StyleSheet,Text, Button,Image, TouchableOpacity } from "react-native";
import * as React from 'react';


export default function CallForwardings({navigation}){
    return(

         <View style={styles.container}>
             <View style={{marginTop:50,height:"6%",width:"100%",backgroundColor:"white",borderRadius:50,display:"flex",justifyContent:"space-between",flexDirection:"row",
            shadowOffset:{  width: 20,  height: 20,  },
            shadowColor: 'black',
            shadowOpacity: 1.0            
            }}>
             <Image source={require('../images/cf.jpg')} style={{height:25,width:25,borderRadius:50,marginTop:6,marginLeft:5}}/>
                 <Text style={{marginTop:7,fontSize:17}}>Call Forwarding</Text>
                 <Image source={require('../images/more.png')} style={{height:17,width:17,marginTop:9,marginRight:4}}/>
             </View>
             <View style={{height:200,width:"80%",marginTop:140,marginLeft:"10%",backgroundColor:"#E5ECDA",display:"flex",alignItems:"center",justifyContent:"center"}}>
             <Text style={{fontSize:17,fontWeight:"100"}}>To foreward your call on new phone </Text>
             <Text style={{fontSize:17,marginLeft:5}}>number press on the plus icon</Text>

             </View>
            
             <TouchableOpacity
        style={{height:50,width:50,borderRadius:50,borderColor:"black",marginTop:110,backgroundColor:"white",left:5}}
      >
        <Image source={require('../images/call.png')} style={{height:35,width:35,borderRadius:50,marginTop:8,marginLeft:5}}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={{position:"absolute",height:50,width:50,borderRadius:50,borderColor:"black",marginTop:535,backgroundColor:"white",left:5,marginLeft:300}}
      >
        <Image source={require('../images/plus.png')} style={{height:35,width:35,borderRadius:50,marginTop:6.5,marginLeft:8}}/>
      </TouchableOpacity>
          
         </View>

    )
}
var styles=StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#E5ECDA"
    }
})
