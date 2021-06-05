import { View,StyleSheet,Text, Button,Image, TouchableOpacity,TextInput} from "react-native";
import React from 'react';

var Cf3=()=>{
    return(

         <View style={styles.container}>
             <View style={{marginTop:35,height:"7%",width:"100%",backgroundColor:"white",borderRadius:50,display:"flex",justifyContent:"space-between",flexDirection:"row",
            shadowOffset:{  width: 20,  height: 20,  },
            shadowColor: 'black',
            shadowOpacity: 1.0            
            }}>
             <Image source={require('../images/cf.jpg')} style={{height:25,width:25,borderRadius:50,marginTop:7,marginLeft:5}}/>
                 <Text style={{marginTop:7,fontSize:17}}>Call Forwarding</Text>
                 <Image source={require('../images/more.png')} style={{height:17,width:17,marginTop:10,marginRight:4}}/>
             </View>


             <View style={{height:250,width:"90%",marginTop:20,marginLeft:"5%",backgroundColor:"#E5ECDA",borderRadius:10}}>
                 <Text style={{fontSize:30}}>Welcome</Text>
           <View style={{width:"100%",marginLeft:0,height:"60%"}}>
            <TouchableOpacity style={styles.Textinput}>
                <TextInput style={{textAlign:"center"}} placeholder="Existing Name"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Textinput}>
                <TextInput style={{textAlign:"center"}} placeholder="New Forwarding Number"/>
            </TouchableOpacity>
           </View>
          
             </View>

            
             <TouchableOpacity
        style={{height:50,width:50,borderRadius:50,borderColor:"black",marginTop:190,backgroundColor:"white",left:5}}
      >
        <Image source={require('../images/call.png')} style={{height:35,width:35,borderRadius:50,marginTop:8,marginLeft:5}}/>
      </TouchableOpacity>


      <TouchableOpacity
        style={{position:"absolute",height:50,width:50,borderRadius:50,borderColor:"black",marginTop:535,backgroundColor:"white",left:5,marginLeft:300}}
      >
        <Image source={require('../images/plus.png')} style={{height:35,width:35,borderRadius:50,marginTop:7,marginLeft:8}}/>
      </TouchableOpacity>
          
         </View>

    )
}
var styles=StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#E5ECDA"
    },
    Textinput:{
        width:"100%",
        backgroundColor:"white",
        borderRadius:5,
        height:35,marginTop:25
    }
})

export default Cf3;