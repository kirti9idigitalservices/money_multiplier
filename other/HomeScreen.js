import React from 'react';
import {ImageBackground, StyleSheet, View , Text , TouchableOpacity,Image, ScrollView} from 'react-native';

const HomeScreen = () => {
  return (
      <View style={{flex:1,backgroundColor:"white"}}>
      <ScrollView>
        <ImageBackground source={require('../images/HeaderBg.jpg')} style={styles.header} />
            <View style={styles.circle} >
                
                <View style={{height:"90%"}}>
                <View style={{backgroundColor:"white",width:"100%",height:130}}>
                <View style={{backgroundColor:"black",height:30,justifyContent:"center",paddingLeft:5}}>
                <Text style={{color:"white",fontWeight:"bold"}}>Investment Record</Text>  
                </View> 
                
                <View style={{flexDirection:"row",alignItems:"center",padding:10,backgroundColor:"white",justifyContent:"space-around",marginTop:15}}>
                    <View style={{alignItems:"center"}}>
                        <Text style={{color:"royalblue",fontWeight:"bold",fontSize:16}}>Rs 0.00</Text>
                        <Text style={{color:"black"}}>Total Assests</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <Text style={{color:"green",fontWeight:"bold",fontSize:16}}>Rs 0.00</Text>
                        <Text style={{color:"black"}}>Today's Income</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <Text style={{color:"red",fontWeight:"bold",fontSize:16}}>Rs 0.00</Text>
                        <Text style={{color:"black"}}>Transactions</Text>
                    </View>
                </View>
                </View>
                <View style={{backgroundColor:"white"}}>
                <TouchableOpacity style={{height:50,backgroundColor:"royalblue",borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"white", fontWeight:"bold"}}>
                        91******9812 stb66 Web Order Revenue 2,000.38;
                    </Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",marginTop:"5%",justifyContent:"space-between"}}>
                    
                    <View  style={{width:"48%",height:150,borderRadius:20}}>
                    <TouchableOpacity>
                    <ImageBackground source={require('../images/GreebBg.jpg')} style={{width:"100%",height:"100%"}}>
                        <Text style={{color:"white",fontSize:18,margin:5,fontWeight:"bold"}}>My Investment</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    </View>
                    <View  style={{width:"48%",height:150,borderRadius:20}}>
                    <TouchableOpacity>
                    <ImageBackground source={require('../images/redbg.jpg')} style={{width:"100%",height:"100%"}}>
                    <Text style={{color:"white",fontSize:18,margin:5,fontWeight:"bold"}}>Dividend Log</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    </View>
                </View>
                <Text style={{fontSize:20,fontWeight:"bold",marginTop:"5%"}}>
                    Investor's Status
                </Text>

                <View style={{flexDirection:"row",alignItems:"center",width:"55%"}}>
                    <View style={{width:30,height:30 ,backgroundColor:"grey",borderRadius:30}}/>
                    <View style={{marginLeft:"2%"}}>
                        <Text style={{fontWeight:"bold",fontSize:16}}>
                            John
                        </Text>
                        <Text style={{fontSize:12,color:"grey"}}>
                            Just Invested: 
                            <Text style={{fontWeight:"bold",color:"black"}}>  Mobile Phone</Text>
                        </Text>
                    </View>
                    <View style={{marginLeft:"10%"}}>
                    <Text style={{textAlign:"right",color:"darkorange"}}>
                        x2
                    </Text>
                    <Text style={{color:"grey"}}>
                        123*****78
                    </Text>
                    </View>
                </View>


                <View style={{flexDirection:"row",alignItems:"center",marginTop:10,width:"55%"}}>
                <View style={{width:30,height:30 ,backgroundColor:"grey",borderRadius:30}}/>
                    <View style={{marginLeft:"2%"}}>
                        <Text style={{fontWeight:"bold",fontSize:16}}>
                            Deepti
                        </Text>
                        <Text style={{fontSize:12,color:"grey"}}>
                            Just Invested: 
                            <Text style={{fontWeight:"bold",color:"black"}}>  Mobile Phone</Text>
                        </Text>
                    </View>
                    <View style={{marginLeft:"10%"}}>
                    <Text style={{textAlign:"right",color:"darkorange",fontSize:16}}>
                        x2
                    </Text>
                    <Text style={{color:"grey"}}>
                        123*****78
                    </Text>
                    </View>
                </View>


                <View style={{flexDirection:"row",alignItems:"center",marginTop:10,width:"55%"}}>
                <View style={{width:30,height:30 ,backgroundColor:"grey",borderRadius:30}}/>
                    <View style={{marginLeft:"2%"}}>
                        <Text style={{fontWeight:"bold",fontSize:16}}>
                            Ramesh
                        </Text>
                        <Text style={{fontSize:12,color:"grey"}}>
                            Just Invested: 
                            <Text style={{fontWeight:"bold",color:"black"}}>  Mobile Phone</Text>
                        </Text>
                    </View>
                    <View style={{marginLeft:"10%"}}>
                    <Text style={{textAlign:"right",color:"darkorange",fontSize:16}}>
                        x2
                    </Text>
                    <Text style={{color:"grey"}}>
                        123*****78
                    </Text>
                    </View>
                </View>
                
                </View>
                
                </View>
                
    </View>
    </ScrollView>
    <View style={{height:60,backgroundColor:"white",alignItems:"center",flexDirection:"row",elevation:10,borderWidth:0.1}}>
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
                <Text style={{fontSize:10,color:"black"}}>Recharge</Text>
            </TouchableOpacity>
            
            </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 150,
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: 'indigo',
  },
  circle: {
    width: "90%",
    alignSelf:"center",
    top: "-5%",
    elevation: 10,
  },
});