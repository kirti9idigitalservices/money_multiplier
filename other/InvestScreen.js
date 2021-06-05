import React from 'react';
import {View,TouchableOpacity,Text,Image ,ImageBackground, Dimensions,ScrollView ,StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width

export default function InvestScreen(){

    return(
        <View style={{flex:1}}>
            
            <LinearGradient colors={['greenyellow', 'green']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                    style={{width: "100%", height: 60 ,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <Image source={require('../images/backi.png')} style={{width:10,height:20,marginLeft:"4%"}}/>
                        <TouchableOpacity style={styles.signin_container} onPress={()=> setIsInstruction(false)}>
                            <Text style={{fontSize: 20, color: '#fff',fontWeight:"bold"}}>Investment Hall</Text>
                        </TouchableOpacity>
            </LinearGradient>
             <ScrollView>
                


                <View style={{borderWidth:0.1,height:200,margin:5,justifyContent:"space-between",borderRadius:10}}>
                    <View style={{flexDirection:"row",height:"58%",alignItems:"center",padding:10}}>
                        <View style={{borderWidth:3,borderColor:"lightgrey",width:60}}>
                        <Image source={require('../images/Poerbank.png')} style={{width:"100%",height:60}} />
                        </View>

                        <View style={{width:'65%'}}>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Power Bank - 1hole</Text>
                        <View style={{flexDirection:"row",alignSelf:"center"}}>
                        <TouchableOpacity style={{backgroundColor:"blue",height:30,alignItems:"center",justifyContent:"center",padding:5,borderRadius:10,width:"35%",margin:5}}>
                        
                        <Text style={{fontSize:11,color:"white"}}>Share Power</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"green",height:30,alignItems:"center",justifyContent:"center",padding:5,borderRadius:10,width:"35%",margin:5}}>
                            <Text style={{fontSize:11,color:"white"}}>Earn Income</Text>
                        </TouchableOpacity>

                        


                        </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{backgroundColor:"gold",width:60,height:25,alignItems:"center",borderRadius:10,justifyContent:"center"}}>
                                <Text style={{fontSize:14,color:"white"}}>Series1</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection:"row",alignItems:"center",borderRadius:20,marginTop:5,backgroundColor:"gold"}}>
                            <TouchableOpacity style={{backgroundColor:"blue",width:25,alignItems:"center",justifyContent:"center",borderRadius:20,height:25}}>
                                <Text style={{fontSize:12,color:"white"}}>Lv</Text>

                            </TouchableOpacity>
                            <View style={{alignItems:"center",justifyContent:"center",width:30,height:25,alignItems:"center",transform : [ { scaleX : 1 } ],borderRadius:10}}>
                                <Text style={{color:"white"}}>1</Text>
                            </View>
                            </View>

                        </View>
                    </View>
                    <View style={{flexDirection:"row",height:"40%",alignItems:"center",padding:10,backgroundColor:"blue",borderRadius:10,justifyContent:"space-between"}}>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"yellow",fontWeight:"bold"}}>Rs 1.55</Text>
                            <Text style={{color:"white"}}>Hourly Profit</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"yellow",fontWeight:"bold"}}>Rs 500</Text>
                            <Text style={{color:"white"}}>Device Value</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{backgroundColor:"royalblue",height:25,alignItems:"center",borderRadius:20,width:100,height:40,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontSize:16,color:"white"}}>Invest</Text>
                            </TouchableOpacity>

                        </View>
                        </View>
                </View>


                <View style={{borderWidth:0.1,height:200,margin:5,justifyContent:"space-between",borderRadius:10,}}>
                    <View style={{flexDirection:"row",height:"58%",alignItems:"center",padding:10}}>

                    <View style={{borderWidth:3,borderColor:"lightgrey",width:60}}>
                        <Image source={require('../images/Poerbank.png')} style={{width:"100%",height:60}} />
                    </View>
                        <View style={{width:'65%'}}>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Power Bank - 1hole</Text>
                        <View style={{flexDirection:"row",alignSelf:"center"}}>
                        <TouchableOpacity style={{backgroundColor:"blue",height:30,alignItems:"center",justifyContent:"center",padding:5,borderRadius:10,width:"35%",margin:5}}>
                        
                        <Text style={{fontSize:11,color:"white"}}>Share Power</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"green",height:30,alignItems:"center",justifyContent:"center",padding:5,borderRadius:10,width:"35%",margin:5}}>
                            <Text style={{fontSize:11,color:"white"}}>Earn Income</Text>
                        </TouchableOpacity>

                        


                        </View>
                        </View>
                            <View>
                            <TouchableOpacity style={{backgroundColor:"gold",width:60,height:25,alignItems:"center",borderRadius:10,justifyContent:"center"}}>
                                <Text style={{fontSize:14,color:"white"}}>Series1</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection:"row",alignItems:"center",borderRadius:20,marginTop:5,backgroundColor:"gold"}}>
                            <TouchableOpacity style={{backgroundColor:"blue",width:25,alignItems:"center",justifyContent:"center",borderRadius:20,height:25}}>
                                <Text style={{fontSize:12,color:"white"}}>Lv</Text>

                            </TouchableOpacity>
                            <View style={{alignItems:"center",justifyContent:"center",width:30,height:25,alignItems:"center",transform : [ { scaleX : 1 } ],borderRadius:10}}>
                                <Text style={{color:"white"}}>1</Text>
                            </View>
                            </View>

                            </View>
                    </View>
                    <View style={{flexDirection:"row",height:"40%",alignItems:"center",padding:10,backgroundColor:"blue",borderRadius:10,justifyContent:"space-between"}}>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"yellow",fontWeight:"bold"}}>Rs 1.55</Text>
                            <Text style={{color:"white"}}>Hourly Profit</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"yellow",fontWeight:"bold"}}>Rs 500</Text>
                            <Text style={{color:"white"}}>Device Value</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{backgroundColor:"royalblue",height:25,alignItems:"center",borderRadius:20,width:100,height:40,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontSize:16,color:"white"}}>Invest</Text>
                            </TouchableOpacity>

                        </View>
                        </View>
                </View>


                <View style={{borderWidth:0.1,height:200,margin:5,justifyContent:"space-between",borderRadius:10,marginBottom:50}}>
                    <View style={{flexDirection:"row",height:"58%",alignItems:"center",padding:10}}>

                    <View style={{borderWidth:3,borderColor:"lightgrey",width:60}}>
                        <Image source={require('../images/Poerbank.png')} style={{width:"100%",height:60}} />
                    </View>
                        <View style={{width:'65%'}}>
                        <Text style={{textAlign:"center",fontWeight:"bold"}}>Power Bank - 1hole</Text>
                        <View style={{flexDirection:"row",alignSelf:"center"}}>
                        <TouchableOpacity style={{backgroundColor:"blue",height:30,alignItems:"center",justifyContent:"center",padding:5,borderRadius:10,width:"35%",margin:5}}>
                        
                        <Text style={{fontSize:11,color:"white"}}>Share Power</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"green",height:30,alignItems:"center",justifyContent:"center",padding:5,borderRadius:10,width:"35%",margin:5}}>
                            <Text style={{fontSize:11,color:"white"}}>Earn Income</Text>
                        </TouchableOpacity>

                        


                        </View>
                        </View>
                            <View>
                            <TouchableOpacity style={{backgroundColor:"gold",width:60,height:25,alignItems:"center",borderRadius:10,justifyContent:"center"}}>
                                <Text style={{fontSize:14,color:"white"}}>Series1</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection:"row",alignItems:"center",borderRadius:20,marginTop:5,backgroundColor:"gold"}}>
                            <TouchableOpacity style={{backgroundColor:"blue",width:25,alignItems:"center",justifyContent:"center",borderRadius:20,height:25}}>
                                <Text style={{fontSize:12,color:"white"}}>Lv</Text>

                            </TouchableOpacity>
                            <View style={{alignItems:"center",justifyContent:"center",width:30,height:25,alignItems:"center",transform : [ { scaleX : 1 } ],borderRadius:10}}>
                                <Text style={{color:"white"}}>1</Text>
                            </View>
                            </View>

                            </View>
                    </View>
                    <View style={{flexDirection:"row",height:"40%",alignItems:"center",padding:10,backgroundColor:"blue",borderRadius:10,justifyContent:"space-between"}}>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"yellow",fontWeight:"bold"}}>Rs 1.55</Text>
                            <Text style={{color:"white"}}>Hourly Profit</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:"yellow",fontWeight:"bold"}}>Rs 500</Text>
                            <Text style={{color:"white"}}>Device Value</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{backgroundColor:"royalblue",height:25,alignItems:"center",borderRadius:20,width:100,height:40,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontSize:16,color:"white"}}>Invest</Text>
                            </TouchableOpacity>

                        </View>
                        </View>
                </View>



                </ScrollView>
                
            <View style={{height:60,backgroundColor:"white",alignItems:"center",flexDirection:"row"}}>
                <TouchableOpacity style={{width:"15%",height:"60%",marginHorizontal:"3%",alignItems:"center",justifyContent:"center"}}>
                <Image source ={require('../images/Home.png')} style={{width:"70%",height:"100%",marginHorizontal:"3%"}}/>
                <Text style={{fontWeight:"bold",fontSize:10}}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:"15%",height:"60%",marginLeft:"3%",alignItems:"center",justifyContent:"center"}}>
                <Image source ={require('../images/Investicon.png')}  style={{width:"70%",height:"100%",marginHorizontal:"3%"}}/>
                <Text style={{fontWeight:"bold",fontSize:10}}>Investment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:"15%",height:"60%",marginLeft:"25%",alignItems:"center",justifyContent:"center"}}>
                <Image source ={require('../images/Team.png')}  style={{width:"70%",height:"100%"}}/>
                <Text style={{fontWeight:"bold",fontSize:10}}>Team</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:"15%",height:"60%",marginHorizontal:"3%",alignItems:"center",justifyContent:"center"}}>
                <Image source ={require('../images/profile.png')}  style={{width:"70%",height:"100%"}}/>
                <Text style={{fontWeight:"bold",fontSize:10}}>Account</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{height: 60,
    width: 60,
    borderRadius: 50,
    position: 'absolute',
    bottom:20,
    alignSelf:"center",
    elevation: 10,
    alignItems:"center",
    justifyContent:"center",
    
    backgroundColor: 'gold',}}>
            <TouchableOpacity style={{alignItems:"center",justifyContent:"center"}}>
                <Image source ={require('../images/Pay.png')} style={{width:30,height:"60%"}}/>
                <Text style={{fontSize:10}}>Recharge</Text>
            </TouchableOpacity>
            
            </View>
        </View>
        
    )

}

const styles= StyleSheet.create({
    signin_container: {
        width: '100%', 
        marginLeft:"50%"         
        
    }
})


/*

<ImageBackground source={require('../images/greenbg.jpg')} style={{height:200,alignItems:"center",justifyContent:"center"}}>
                    
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{width:"30%",justifyContent:"space-between"}}>
                    <TouchableOpacity>
                        <Image source={require('../images/back.png')} style={{width:40,height:30}}/>
                    </TouchableOpacity>  
                        <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Investment Hall</Text>
                   
                    </View>

                    <Image source={require('../images/unnamed.png')} style={{width:"45%",height:150,marginLeft:"15%"}}/>
                    
                    </View>
                   
                </ImageBackground>
*/