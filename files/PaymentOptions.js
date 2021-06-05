import { View,StyleSheet,Text, Button,Image, TouchableOpacity,TextInput} from "react-native";
import * as React from 'react';


function PaymentOptions({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
             <Image source={require('../images/ls2.png')} style={styles.image}></Image>
             <Text style={styles.text}> Recharge</Text>
             </View>  

             <Text style={{left:"6%",fontSize:20,top:10,
              shadowOffset:{  width: 20,  height: 20,  },
              shadowColor: 'black',
              shadowOpacity: 0.5  
            }}>Cards</Text>  
             <View style={styles.balance}>
            <Image  source={require('../images/payment/6.jpeg')} style={{height:32,width:32,left:"10%"}}/>
            <Text style={{fontSize:15,left:22,top:0}}>{'Credit,Debit & ATM Cards '}</Text>
             </View>   

              <Text style={{left:"6%",fontSize:20,top:10,
              shadowOffset:{  width: 20,  height: 20,  },
              shadowColor: 'black',
              shadowOpacity: 0.5  
            }}>UPI</Text> 

             <View style={styles.balance2}>
                 <View style={styles.inner}>
                 <Image  source={require('../images/payment/5.jpeg')} style={{height:20,width:20,left:"20%",top:4,borderRadius:50}}/>
                 <Text style={{fontSize:13,left:25,top:2}}>{'Paytm UPI '}</Text>
                 </View>

                 <View style={styles.inner}>
                 <Image  source={require('../images/payment/2.jpeg')} style={{height:20,width:20,left:"20%",top:4,borderRadius:50}}/>
                 <Text style={{fontSize:13,left:25,top:2}}>{'Google  Pay '}</Text>
                     
                </View>

                <View style={styles.inner}>
                <Image  source={require('../images/Welcome/upi.png')} style={{height:20,width:20,left:"20%",top:4,borderRadius:50}}/>
                 <Text style={{fontSize:13,left:25,top:2}}>{'Pay Via UPI '}</Text>
                     
                </View>
               
             </View> 

              <Text style={{left:"6%",fontSize:20,top:10,
              shadowOffset:{  width: 20,  height: 20,  },
              shadowColor: 'black',
              shadowOpacity: 0.5  
            }}>Wallets</Text>  
             <View style={styles.balance3}>
             <View style={styles.inner}>
                 <Image  source={require('../images/payment/4.jpeg')} style={{height:20,width:20,left:"20%",top:4,borderRadius:50}}/>
                 <Text style={{fontSize:13,left:25,top:4}}>{'MobiKwik '}</Text>
                     
                </View>

                <View style={styles.inner2}>
                <Image  source={require('../images/payment/3.jpeg')} style={{height:20,width:20,left:"20%",top:4,borderRadius:50}}/>
                 <Text style={{fontSize:13,left:25,top:4}}>{'Freerecharge '}</Text>
                     
                </View>
             </View>                                 
        </View>
    )
}


export default PaymentOptions;



const styles=StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#EFF2F3"
    },
    header:{
        width:"100%",
        height:"7%",
        backgroundColor:"#551563",
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
    height:"8%",
    width:"90%",
    left:"3%",
    backgroundColor:"white",
    borderRadius:5,
    marginTop:20,
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
 },
 balance2:{
    height:"13%",
    width:"90%",
    left:"5%",
    backgroundColor:"white",
    borderRadius:5,
    marginTop:20
 },
 balance3:{
    height:"10%",
    width:"90%",
    left:"5%",
    backgroundColor:"white",
    borderRadius:5,
    marginTop:20
 },
 inner:{
     height:"30%",
     width:"90%",
     left:"5%",
     alignItems:"center",
     display:"flex",
     flexDirection:"row"
 },
 inner2:{
    height:"30%",
    width:"90%",
    left:"5%",
    alignItems:"center",
    display:"flex",
    flexDirection:"row",
    top:10
}
});