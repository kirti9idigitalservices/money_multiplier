import React, { Component } from 'react';
import {View,Text,TouchableOpacity, ImageBackground,Image , TextInput} from 'react-native'

export default class Login extends Component{
    render(){
        return(
            <View>
                <ImageBackground source={require('../images/bg.jpg')} style={{width:"100%",height:"100%"}}>
                <View style={{flexDirection:"row",alignItems:"center",margin:"4%"}}>
                <Image source={require('../images/backi.png')} style={{width:10,height:20}}/>
                <Text style={{fontSize:25,marginLeft:10,fontWeight:"bold"}}>Login</Text>
                </View>

                <Text style={{fontSize:30,color:"white",marginLeft:20,marginTop:"3%",fontWeight:"bold",width:"40%"}}>
                    Welcome back
                </Text>
                <Text style={{fontSize:15,color:"aliceblue",marginLeft:20,marginTop:20,width:"70%",}}>
                    We make it easy for you to invest and earn money
                </Text>

                <View style={{width:"80%",height:"40%",backgroundColor:"white",alignSelf:"center",marginTop:"5%",borderRadius:10}}>
                    <View style={{flexDirection:"row",alignItems:"center",alignSelf:"center"}}>
                    <Image source ={require('../images/bag.png')} style={{width:40,height:40}}/>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"royalblue",width:"40%"}}>Money Multiplier</Text>
                    </View>
                    
                    <View style={{flexDirection:"row",borderBottomColor:"black",borderBottomWidth:1,width:"80%",marginLeft:"7%",alignItems:"center"}}>
                
                    <Image source ={require('../images/profile.png')} style={{width:20,height:20}}/>

                    <TextInput style={{width:"80%",marginLeft:10}}
                    placeholder="User Name"
                    onChangeText={username=>setusername(username)}
                    />
                    </View>
                <View style={{flexDirection:"row",borderBottomColor:"black",borderBottomWidth:1,width:"80%",marginLeft:"6%",alignItems:"center",marginTop:"3%"}}>
                <Image source ={require('../images/3064155.png')} style={{width:20,height:20}}/>

                    <TextInput style={{width:"80%",marginLeft:10}}
                    placeholder="Password"
                    secureTextEntry ={true}
                    />
                    <TouchableOpacity >
                    </TouchableOpacity>
                </View>
                <View style={{width:"80%",marginLeft:"6%",marginTop:"3%"}}>
                <TouchableOpacity>
                <Text>Forgot Password ?</Text>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row",width:"60%",alignSelf:"center",alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity style={{backgroundColor:"orange",height:40,alignItems:"center",justifyContent:"center",borderRadius:20,width:"70%",margin:10}}>
                    <Text style={{color:"white"}}>Log In</Text>
                </TouchableOpacity>

                <Text style={{fontSize:16}}>or  </Text>
                <TouchableOpacity>
                <Text style={{fontSize:16}}>
                    Sign Up
                </Text>
                </TouchableOpacity>
                </View>
                </View>

                <Image source ={require('../images/bg3.png')} style={{width:"100%",height:"30%",bottom:"4.5%",alignSelf:"flex-end"}}/>
                </ImageBackground>
            </View>
        )
    }
}