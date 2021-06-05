import React, { Component } from 'react';
import {View,Text,TouchableOpacity, ImageBackground,Image , TextInput} from 'react-native'

export default class SignUp extends Component{
    render(){
        return(
            <View>
                <ImageBackground source={require('../images/bg.jpg')} style={{width:"100%",height:"100%"}}>
                <View style={{flexDirection:"row",alignItems:"center",margin:"4%"}}>
                <Image source={require('../images/backi.png')} style={{width:10,height:20}}/>
                <Text style={{fontSize:25,marginLeft:10,fontWeight:"bold"}}>Sign Up</Text>
                </View>
                <View style={{flexDirection:"row",width:"100%"}}>
                <View style={{width:'65%'}}>
                <Text style={{fontSize:25,color:"white",marginLeft:20,marginTop:"3%",fontWeight:"bold",fontFamily:"sans-serif"}}>
                    Welcome to 
                </Text>
                <Text style={{fontSize:25,color:"white",marginLeft:20,fontWeight:"bold",fontFamily:"sans-serif"}}>
                    Money Multiplier
                </Text>
                <Text style={{fontSize:15,color:"aliceblue",marginLeft:20,marginTop:10,fontFamily:"sans-serif"}}>
                    We make it easy for you to invest and earn money
                </Text>
                </View>
                
                <Image source ={require('../images/bg.png')} style={{width:"55%",height:170,transform:[{rotateY:'180deg'}] , position:"absolute",right:"-8%",top:"-6%"}}/>
                </View>

                <View style={{width:"80%",height:"60%",backgroundColor:"white",alignSelf:"center",marginTop:"12%",borderRadius:10,}}>
                    <View style={{flexDirection:"row",alignItems:"center",alignSelf:"center"}}>
                    <Image source ={require('../images/bag.png')} style={{width:40,height:40}}/>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"royalblue",width:"40%"}}>Money Multiplier</Text>
                    </View>
                    
                    <View style={{flexDirection:"row",borderBottomColor:"grey",borderBottomWidth:0.5,width:"80%",marginLeft:"7%",alignItems:"center"}}>

                    <TextInput style={{width:"80%",marginLeft:10}}
                    placeholder="Phone Number"
                    onChangeText={username=>setusername(username)}
                    />
                    </View>
                    <View style={{flexDirection:"row",borderBottomColor:"grey",borderBottomWidth:0.5,width:"80%",marginLeft:"7%",alignItems:"center"}}>

                        <TextInput style={{width:"80%",marginLeft:10}}
                        placeholder="E mail id"
                        onChangeText={username=>setusername(username)}
                        />
                    </View>
                    <View style={{flexDirection:"row",borderBottomColor:"grey",borderBottomWidth:0.5,width:"80%",marginLeft:"7%",alignItems:"center"}}>

                    <TextInput style={{width:"80%",marginLeft:10}}
                    placeholder="Password"
                    secureTextEntry ={true}
                    onChangeText={username=>setusername(username)}
                    />
                    </View>
                    <View style={{flexDirection:"row",borderBottomColor:"grey",borderBottomWidth:0.5,width:"80%",marginLeft:"7%",alignItems:"center"}}>

                <TextInput style={{width:"80%",marginLeft:10}}
                secureTextEntry ={true}
                placeholder="Confirm Password"
                onChangeText={username=>setusername(username)}
                />
                </View>
                <View style={{flexDirection:"row",borderBottomColor:"grey",borderBottomWidth:0.5,width:"80%",marginLeft:"7%",alignItems:"center"}}>

                <TextInput style={{width:"80%",marginLeft:10}}
                placeholder="Redeem Code"
                onChangeText={username=>setusername(username)}
                />
                </View>
                <TouchableOpacity style={{backgroundColor:"orange",height:40,alignSelf:"center",justifyContent:"center",borderRadius:10,width:"50%",margin:10,alignItems:"center"}}>
                    <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Sign Up</Text>
                </TouchableOpacity>
                
                <Text style={{textAlign:"center",alignItems:"center"}}>
                    Already have an account?<Text style={{fontWeight:"bold"}} >  Login 
                 </Text>
                </Text>
            
                </View>
                </ImageBackground>
            </View>
        )
    }
}