import { View,StyleSheet,Text, Button,Image, TouchableOpacity,TextInput} from "react-native";
import * as React from 'react';

var cf2=()=>{
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


             <View style={{height:250,width:"90%",marginTop:100,marginLeft:"5%",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:10}}>
           <View style={{width:"90%",marginLeft:"5%",height:"60%",display:"flex",flexDirection:"column",justifyContent:"space-between",marginTop:0}}>
            <TouchableOpacity style={styles.Textinput}>
                <TextInput style={{textAlign:"center"}} placeholder="Existing Number"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Textinput}>
                <TextInput style={{textAlign:"center"}} placeholder="New Forwarding Number"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Textinput}>
                <TextInput style={{textAlign:"center"}} placeholder="Add from Contracts List"/>
            </TouchableOpacity>
           </View>

            <View style={{display:"flex",flexDirection:"row",marginLeft:27,marginTop:10}}>
           <TouchableOpacity style={{width:"30%",backgroundColor:"red",marginRight:"10%",marginTop:"5%",height:35,borderRadius:10}}>
               <Text style={{textAlign:"center",color:"white",marginTop:7}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"30%",backgroundColor:"#4D8DF5",marginRight:"10%",marginTop:"5%",height:35,borderRadius:10}}>
               <Text style={{textAlign:"center",color:"white",marginTop:7}}>Active</Text>
            </TouchableOpacity>
            </View>
             </View>

            
             <TouchableOpacity
        style={{height:50,width:50,borderRadius:50,borderColor:"black",marginTop:108,backgroundColor:"white",left:5}}
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
        width:"95%",
        backgroundColor:"#D8E5D5",
        borderRadius:10,
        height:35
    }
})

export default cf2;