import { View,StyleSheet,Text, Button,Image, TouchableOpacity,TextInput} from "react-native";
import * as React from 'react';



export default function RechargeScreen({navigation}){
    return(
        <View style={styles.container}>
             <View style={styles.header}>
             <Image source={require('../images/ls2.png')} style={styles.image}></Image>
             <Text style={styles.text}> Recharge</Text>
             </View>

             <View style={styles.balance}>
                 <Text style={{color:"white",fontSize:15,left:"5%",top:7}}>My balance</Text>
                 <Text style={{color:"white",fontSize:25,top:7,left:"6%"}}>₹ 0.00</Text>
                 <Text></Text>
                 <TouchableOpacity style={{width:"40%",height:"17%",borderRadius:5,backgroundColor:"#F3F0F3",justifyContent:"center",position:"absolute",marginTop:"10%",left:"57%"}}>
                     <Text style={{color:"#615F61",textAlign:"center"}}>{`Recharge Help >`} </Text>
                 </TouchableOpacity>
            
             </View>

             <View style={styles.balance2}>         
            <Text style={{color:"white",left:"5%",fontSize:20,fontWeight:"bold",top:6}}>Pay Way </Text>
            <View style={{height:"40%",display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"#58D6D5",width:"90%",left:19,top:11}}>
                 <TouchableOpacity style={{width:"30%",borderRadius:5,backgroundColor:"#A7DCF5",justifyContent:"center"}}>
                     <Text style={{color:"white",textAlign:"center"}}>STP-SEP</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:"30%",borderRadius:5,backgroundColor:"#A7DCF5",justifyContent:"center"}}>
                     <Text style={{color:"white",textAlign:"center"}}>STB-CAR</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:"30%",borderRadius:5,backgroundColor:"#A7DCF5",justifyContent:"center"}}>
                     <Text style={{color:"white",textAlign:"center"}}>STB66H</Text>
                 </TouchableOpacity>
                 
                 </View>
            <View>

            </View>
             </View>

             <View style={styles.Recharge_amount}>
              <Text style={{fontSize:14,left:14}}>Recharge Amount</Text>
             </View>

             <View style={styles.amount}>
                 <TouchableOpacity style={{width:"90%",left:"5%",height:"25%",backgroundColor:"#F3F0F3",marginTop:10,justifyContent:"center",borderRadius:5}}>
                     <Text style={{left:"10%",color:"#615F61"}}>1000</Text>
                 </TouchableOpacity>
                 
                 <View style={{height:"23%",display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",width:"90%",left:"13%",top:8}}>
                 <TouchableOpacity style={{width:"20%",borderRadius:5,backgroundColor:"#F3F0F3",justifyContent:"center"}}>
                     <Text style={{color:"#615F61",textAlign:"center"}}>500</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:"20%",borderRadius:5,backgroundColor:"#F3F0F3",justifyContent:"center"}}>
                     <Text style={{color:"#615F61",textAlign:"center"}}>800</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:"20%",borderRadius:5,backgroundColor:"#5BBFED",justifyContent:"center"}}>
                     <Text style={{color:"#615F61",textAlign:"center"}}>1000</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:"20%",borderRadius:5,backgroundColor:"#F3F0F3",justifyContent:"center"}}>
                     <Text style={{color:"#615F61",textAlign:"center"}}>1000</Text>
                 </TouchableOpacity>
                 </View>

                 <View style={{height:"23%",display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",width:"90%",left:"13%",top:17}}>
                 <TouchableOpacity style={{width:"20%",borderRadius:5,backgroundColor:"#F3F0F3",justifyContent:"center"}}>
                     <Text style={{color:"#615F61",textAlign:"center"}}>5000</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:"20%",borderRadius:5,backgroundColor:"#F3F0F3",justifyContent:"center"}}>
                     <Text style={{color:"#615F61",textAlign:"center"}}>10000</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:"20%",borderRadius:5,backgroundColor:"#F3F0F3",justifyContent:"center"}}>
                     <Text style={{color:"#615F61",textAlign:"center"}}>30000</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{width:"20%",borderRadius:5,backgroundColor:"#F3F0F3",justifyContent:"center"}}>
                     <Text style={{color:"#615F61",textAlign:"center"}}>50000</Text>
                 </TouchableOpacity>
                 </View>
             </View>

             <View style={{left:"10%"}}>
              <Text style={{fontSize:8.5,color:"black"}}>
                  To ensure the success rate of your transiction,<Text style={{fontSize:8.5,color:"red"}}>
                  make sure your
                  </Text>
              </Text>
              <Text style={{fontSize:8.5,color:"red"}}>
                 mobile phone number and email address are accurate
                  </Text>
             </View>

         <TouchableOpacity style={{borderRadius:5,left:"40%",width:"30%",backgroundColor:"orange",height:35,top:15,justifyContent:"center",alignItems:"center"}}> 
         <Text style={{textAlign:"center",color:"white"}}>Recharge</Text>
         </TouchableOpacity>   
         
        </View>
    )
}


var styles=StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"white"
    },
    header:{
         width:"100%",
         height:"8%",
         backgroundColor:"orange",
         display:"flex",
         alignItems:"center",
         justifyContent:"space-between",
         flexDirection:"row",
         marginTop:20

    },
    image:{
        height:30,
        width:15,
        color:"white",
        left:10
    },
    text:{
        color:"white",
        fontSize:22,
        fontWeight:"bold",
        right:20,
        shadowOffset:{  width: 20,  height: 20,  },
        shadowColor: 'black',
        shadowOpacity: 2.0  
    },
    balance:{
       height:"13%",
       width:"96%",
       left:"2%",
       backgroundColor:"#ED2828",
       borderRadius:5,
       marginTop:14
    },
    balance2:{
        height:"13%",
        width:"96%",
        left:"2%",
        backgroundColor:"#58D6D5",
        borderRadius:5,
        marginTop:8
     },
     Recharge_amount:{
         height:"7%",
         backgroundColor:"#EEF5F5",
         marginTop:8,
         justifyContent:"center"
     },
     amount:{
         height:"25%",
         backgroundColor:"white",
         marginTop:10
     }
})