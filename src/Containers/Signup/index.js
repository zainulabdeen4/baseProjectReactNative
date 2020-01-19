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
import RNPickerSelect from 'react-native-picker-select';
// import { Sae } from 'react-native-textinput-effects';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
const { width, height } = Dimensions.get("window")




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
                            width: width,
                            marginBottom: Metrics.baseMargin
                        }}>
                        <TouchableOpacity
                        style={{zIndex:1,width:20}}
                            onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../assets/Page3/1.png')}
                                style={{ width: 20, height: 20 }}
                                resizeMode="contain" />
                        </TouchableOpacity>
                        <Image source={require('../../assets/Page3/5.png')}
                            style={{ width: 20, height: 20 }}
                            resizeMode="contain" />

                    </View>
                    <Image source={require('../../assets/Page2/3.png')}
                        style={{ position: "absolute", bottom: 0, right: 0, width: 120, height: 120 }} />
                    <Image source={require('../../assets/Page2/222.png')}
                        style={{ position: "absolute", top: 0, left: 0, width: 120, height: 120 }} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: "center", paddingHorizontal: Metrics.doubleBaseMargin + 8, paddingBottom: Metrics.doubleBaseMargin }}
                    style={{ width: "100%" }}>
                    
                   

                    <Text style={{ color: "#3B83BD", fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>SIGN UP YOUR ACCOUNT</Text>
                    <View style={{ width: 30, height: 2, backgroundColor: "#3B83BD" }} />
                    <View style={{ width: "100%" }}>
                        <TextField
                            label='First Name'
                            keyboardType='default'
                            // formatText={this.formatText}
                            textColor="#3B83BD"
                            baseColor="#3B83BD"
                            fontSize={14}
                            lineWidth={1.5}

                            contentInset={styles.contentInset}
                            containerStyle={{ marginVertical: -2 }}
                        />
                        <TextField
                            label='Last Name'
                            keyboardType='default'
                            // formatText={this.formatText}
                            textColor="#3B83BD"
                            baseColor="#3B83BD"
                            fontSize={14}
                            lineWidth={1.5}
                            inputContainerStyle={{ marginTop: Platform.select({ ios: 8, android: -8 }), }}
                            containerStyle={{ marginVertical: -2 }}
                            contentInset={styles.contentInset}
                        />
                        <TextField
                            label='Email Address'
                            keyboardType='email-address'
                            // formatText={this.formatText}
                            textColor="#3B83BD"
                            baseColor="#3B83BD"
                            fontSize={14}
                            lineWidth={1.5}
                            inputContainerStyle={{ marginTop: Platform.select({ ios: 8, android: -8 }), }}
                            containerStyle={{ marginVertical: -2 }}
                            contentInset={styles.contentInset}
                        />
                        <TextField
                            label='Phone Number'
                            keyboardType='phone-pad'
                            // formatText={this.formatText}
                            textColor="#3B83BD"
                            baseColor="#3B83BD"
                            fontSize={14}
                            lineWidth={1.5}
                            inputContainerStyle={{ marginTop: Platform.select({ ios: 8, android: -8 }), }}
                            containerStyle={{ marginVertical: -2 }}
                            contentInset={styles.contentInset}
                        />
                        <TextField
                            label='Last Name'
                            keyboardType='default'
                            // formatText={this.formatText}
                            textColor="#3B83BD"
                            baseColor="#3B83BD"
                            fontSize={14}
                            lineWidth={1.5}
                            inputContainerStyle={{ marginTop: Platform.select({ ios: 8, android: -8 }), }}
                            containerStyle={{ marginVertical: -2 }}
                            contentInset={styles.contentInset}
                        />
                        <TextField

                            label='User Name'
                            keyboardType='default'
                            // formatText={this.formatText}
                            textColor="#3B83BD"
                            baseColor="#3B83BD"
                            fontSize={14}
                            lineWidth={1.5}
                            inputContainerStyle={{ marginTop: Platform.select({ ios: 8, android: -8 }), }}
                            containerStyle={{ marginVertical: -2 }}
                            contentInset={styles.contentInset}
                        />
                        <TextField
                            label='Password'
                            keyboardType='default'
                            // formatText={this.formatText}
                            textColor="#3B83BD"
                            baseColor="#3B83BD"
                            secureTextEntry={true}
                            fontSize={14}
                            lineWidth={1.5}
                            inputContainerStyle={{ marginTop: Platform.select({ ios: 8, android: -8 }), }}
                            containerStyle={{ marginVertical: -2 }}
                            contentInset={styles.contentInset}
                        />
                    </View>
                    <View style={{ width: "100%", marginTop: Metrics.baseMargin }}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Role',
                                value: null,
                                color: '#3B83BD',
                            }}
                            items={[
                                {
                                    label: 'manager',
                                    value: 'manager',
                                },
                                {
                                    label: 'assistant',
                                    value: 'assistant',
                                },
                                {
                                    label: 'trainee',
                                    value: 'trainee',
                                },
                            ]}
                            onValueChange={value => {
                                this.setState({
                                    favSport3: value,
                                });
                            }}
                            style={{
                                pickerProps: { color: "#3B83BD" },
                                placeholder: {
                                    color: '#3B83BD',
                                    fontSize: 14,

                                },
                                inputAndroid: {
                                    backgroundColor: 'transparent',
                                    paddingHorizontal: 12,
                                    color: "#3B83BD",
                                    height: 35
                                },
                                iconContainer: {
                                    bottom: 7,
                                    right: 0
                                },


                            }}
                            value={this.state.favSport3}
                            useNativeAndroidPickerStyle={false}
                            textInputProps={{ borderBottomColor: "#3B83BD", paddingVertical: 4, borderBottomWidth: 1.5 }}
                            Icon={() => {
                                return <Image source={require('../../assets/Page3/9.png')} style={{ height: 12, width: 12 }} resizeMode="contain" />;
                            }}
                        />
                        <RNPickerSelect
                            placeholder={{
                                label: 'Production Name',
                                value: null,
                                color: '#3B83BD',
                            }}
                            items={[
                                {
                                    label: 'example1',
                                    value: 'example1',
                                },
                                {
                                    label: 'example2',
                                    value: 'example2',
                                },
                                {
                                    label: 'example3',
                                    value: 'example3',
                                },
                            ]}
                            onValueChange={value => {
                                this.setState({
                                    favSport3: value,
                                });
                            }}
                            style={{

                                placeholder: {
                                    color: '#3B83BD',
                                    fontSize: 14,

                                },
                                inputAndroid: {
                                    backgroundColor: 'transparent',
                                    paddingHorizontal: 12,
                                    color: "#3B83BD",
                                    height: 35,
                                    marginTop: 10
                                },
                                iconContainer: {
                                    bottom: 7,
                                    right: 0
                                },

                            }}
                            value={this.state.favSport3}
                            useNativeAndroidPickerStyle={false}
                            textInputProps={{ borderBottomColor: "#3B83BD", paddingVertical: 4, borderBottomWidth: 1.5 }}
                            Icon={() => {
                                return <Image source={require('../../assets/Page3/9.png')} style={{ height: 12, width: 12 }} resizeMode="contain" />;
                            }}
                        />

                    </View>
                    <TouchableOpacity style={{
                        width: "40%", height: 30,
                        borderRadius: 15, backgroundColor: "#CBDDEB"
                        , marginVertical: Metrics.baseMargin,
                        borderColor: "#5C7E9B", borderWidth: 1.5, opacity: .8, flexDirection: "row", alignItems: "center", justifyContent: "center"
                    }}>
                        <Image source={require('../../assets/Page3/6.png')} style={{ width: 20, height: 15, marginRight: 3 }} resizeMode="contain" />
                        <Text style={{ fontSize: 11, color: "#6D91B1" }}>Upload Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "100%", height: 50, backgroundColor: "#2A71CD", borderRadius: 25, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 14 }}>Next</Text>
                    </TouchableOpacity>



                </ScrollView>
            </ImageBackground >
        );
    }
}
const styles = {
    contentInset:
        { left: 12, input: 4 }
}

// const mapStateToProps = ({ AddGoal }) => ({
//   AddGoal,
// });
// const actions = { addGoal };
// export default connect(
//   mapStateToProps,
//   actions,
// )(AddGoal);