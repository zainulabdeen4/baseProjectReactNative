import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    Dimensions,
    ImageBackground,
    FlatList,
    Keyboard,
    ActivityIndicator,

} from 'react-native';
import { Metrics } from '../../theme'
const { width, height } = Dimensions.get("window")

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }


    componentDidMount() {



    }

    componentWillUnmount() {

    }



    render() {
        console.log(this.state, 'state in add goal');
        return (
            <ImageBackground
                source={require('../../assets/Page2/77.png')}
                style={{
                    flex: 1, justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: width * .09
                }}>
                <Image source={require('../../assets/Page2/3.png')}
                 style={{position:"absolute",bottom:0,right:0,width:120,height:120}}/>
                 <Image source={require('../../assets/Page2/222.png')}
                 style={{position:"absolute",top:0,left:0,width:120,height:120}}/>
                <Image
                    source={require('../../assets/Page2/66.png')}
                    style={{
                        width: '90%',
                        height: height * 0.14,
                        marginBottom: height * .09
                    }} />
                <View style={{ width: "100%", marginBottom: Metrics.doubleBaseMargin }}>
                    <View style={{
                        width: "100%",
                        backgroundColor: "#DFE8EF", height: 50, borderRadius: 25,
                        borderColor: "#4787C4", borderWidth: 2,
                        justifyContent: "center", paddingHorizontal: 10,
                        marginBottom: Metrics.baseMargin,
                        opacity: .8

                    }}>
                        <TextInput placeholder={"Email ID"}
                            placeholderTextColor="#2F6697"
                            style={{ fontSize: 14, color: "#2F6697" }} />
                    </View>
                    <View style={{
                        width: "100%",
                        backgroundColor: "#DFE8EF", height: 50, borderRadius: 25,
                        borderColor: "#4787C4", borderWidth: 2,
                        justifyContent: "center", paddingHorizontal: 10,
                        opacity: .8

                    }}>
                        <TextInput placeholder={"Password"}
                            placeholderTextColor="#2F6697"
                            style={{ fontSize: 14, color: "#2F6697" }}
                            secureTextEntry={true} />
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("SignUp")}>
                        <Text style={{ left: Metrics.smallMargin + 6, color: "#2F6697", marginTop: 2 }}>Sin up</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ width: "100%", height: 50, backgroundColor: "#2A71CD", borderRadius: 25, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 14 }}>Sign in</Text>
                </TouchableOpacity>


            </ImageBackground >
        );
    }
}

// const mapStateToProps = ({ AddGoal }) => ({
//   AddGoal,
// });
// const actions = { addGoal };
// export default connect(
//   mapStateToProps,
//   actions,
// )(AddGoal);