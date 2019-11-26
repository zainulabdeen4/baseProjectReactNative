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
// import { Sae } from 'react-native-textinput-effects';
const { width, height } = Dimensions.get("window")
import FloatLabelTextInput from 'react-native-floating-label-text-input';



export default class SignUp extends React.Component {
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
                source={require('../../assets/Page3/3aa.png')}
                style={{
                    flex: 1,
                    alignItems: "center",

                    // paddingHorizontal: width * .09
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 12,
                        paddingVertical: 12,
                        width: "100%",
                        marginBottom: Metrics.baseMargin
                    }}>

                    <Image source={require('../../assets/Page3/1.png')}
                        style={{ width: 20, height: 20 }}
                        resizeMode="contain" />
                    <Image source={require('../../assets/Page3/5.png')}
                        style={{ width: 20, height: 20 }}
                        resizeMode="contain" />

                </View>
                <Image source={require('../../assets/Page2/3.png')}
                    style={{ position: "absolute", bottom: 0, right: 0, width: 120, height: 120 }} />
                <Image source={require('../../assets/Page2/222.png')}
                    style={{ position: "absolute", top: 0, left: 0, width: 120, height: 120 }} />

                <Text style={{ color: "#3B83BD", fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>SIGN UP YOUR ACCOUNT</Text>
                <View style={{ width: 30, height: 2, backgroundColor: "#3B83BD" }} />
                <View style={{ width: "100%", paddingHorizontal: Metrics.doubleBaseMargin, marginTop: Metrics.baseMargin }}>
                    <View >
                        <FloatLabelTextInput
                            placeholder={"Email"}
                            style={{ height: 50}}

                            selectionColor="#3B83BD"

                        />
                    </View>
                </View>




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