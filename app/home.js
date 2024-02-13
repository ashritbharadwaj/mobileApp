import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';

const TextBox = props => {
    return (
        <View style={{borderColor:"red",borderWidth:1,position:"relative"}}>
            <View style={{borderWidth:1,borderColor:"blue", position:'absolute'}}>
                <View style={{marginLeft:"15%",backgroundColor:"yellow",marginRight:"auto"}}>
                    <Text style={{color:"grey"}}>Hello {props.name}</Text>
                </View>
            </View>
            <View style={styles.textbox}>
                {/* <Text>Hello {props.name}</Text> */}
            </View>
        </View>
    );
}

export default function Home() {
    return (
        <LinearGradient
        colors={['#061161','#780206']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{height:'100%', justifyContent:'center'}}
        >
            <View style={styles.container}>
                <View style={styles.signheader}>
                    <Text style={{fontSize: 25, borderBottomWidth:2, paddingHorizontal:'5%'}}>SignUp</Text>
                    <Text style={{fontSize: 25}}>SignIn</Text>
                </View>
                <View style={styles.description}>
                    <View style={styles.details}>
                        <TextBox name = "Ashrit"/>
                        <TextBox name = "Bharadwaj"/>
                        <TextBox name = "Ramesh" />
                        <TextBox name = "Bhat"/>
                        <TextBox name = "Kyadgi"/>
                    </View>
                    <View style={{alignItems:"center"}}><Text>Or login with</Text></View>
                    <View style={styles.alsologinwith}>
                        <View style={styles.loginwith}>
                            <Image source={require('../icons/google.png')} style={{width:25,height:25}}/>
                        </View>
                        <View style={styles.loginwith}>
                            <Image source={require('../icons/instagram.png')} style={{width:30,height:30}}/>
                        </View>
                        <View style={styles.loginwith}>
                            <Image source={require('../icons/apple.png')} style={{width:30,height:30}}/>
                        </View>
                    </View>
                    
                </View> 
                {/* <Text>hai</Text> */}
                {/* <Text>Hello, I am...</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: "10%"
                    }}
                    placeholder='name me'
                /> */}
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    loginwith: {
        flex:1,
        //borderWidth:1,
        marginVertical:"5%",
        padding:"auto",
        alignItems:"center",
        justifyContent:"center",
        //marginHorizontal:"15%"
    },

    alsologinwith: {
        //borderWidth: 1,
        borderColor:"red",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "5%"
    },

    textbox: {
        borderWidth : 1,
        borderColor:"grey",
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: '3%',
        paddingHorizontal: "6%",
        paddingVertical: "8%",

    },

    container: {
      flex: 1,
      backgroundColor: 'white',
      color:'white',
      //alignItems: 'center',
      //justifyContent: 'center',
      borderWidth:1,
      marginVertical: "45%",
      marginHorizontal: '10%',
      borderColor:'black',
      borderRadius: 20,
      shadowColor: "yellow",
      elevation:5,
      paddingBottom:'5%'
    },

    signheader: {
        flex:1,
        //borderWidth:1,
        margin:'5%',
        paddingHorizontal:'10%',
        paddingVertical: '3%',
        flexDirection:'row',
        justifyContent: 'space-between',
        
    },

    description: {
        flex:10,
        //borderWidth:1,
        marginHorizontal: '5%',
        paddingHorizontal: '5%',
        //paddingVertical: '5%'
    },

    details: {
        //borderWidth:1,
        borderColor:"red",
        marginTop:"3%"
    }
  });