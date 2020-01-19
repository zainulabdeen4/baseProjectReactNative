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
// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

const data = [
    {
        id: 1,
        name: 'Question 1',
        title: "Did the SC ever recieves measles or an an MMR injection to prevent",
        options: [{ label: 'Yes (vaccination card show)', value: 1 },
        { label: 'No (vaccination card not shown)', value: 2 },
        { label: 'Yes (vaccination card not show)', value: 3 },
        { label: `Don't no/know information provided`, value: 4 }]
    },{
        id: 2,
        name: 'Question 2',
        title: "If not? Why not?",
        options: [{ label: 'Lack of services', value: 1 },
        { label: 'considered unneceesary by family', value: 2 },
        { label: 'financial services a/0 transport too expansive', value: 3 },
        { label: `Too  young (i.e S.C under 9 months)`, value:4 },
        { label: `S.C family doesn't have the douments required to access health services`, value: 5 },
        { label: `vaccination services too far away`, value: 6 }
    ]
    },
    {
        id: 3,
        name: 'Question 3',
        title: "Has the SC had any serious health issues in last 12 months?",
        options: [{ label: 'Yes', value: 1 },
        { label: 'No', value: 2 },
        
    ]
    },{
        id: 4,
        name: 'Question 4',
        title: "If Yes, What type of serious health issues did S.C experience during this period?",
        options: [{ label: 'Severe Diarrhoea', value: 1 },
        { label: 'accute respiratory tract infection', value: 2 },
        { label: 'Malaria', value: 3 },
        { label: `Eye Problem`, value: 4 },
        { label: `Ear Infection`, value: 4 },
        { label: `Dental Problems`, value: 6 }
    ]
    },{
        id: 5,
        name: 'Question 5',
        title: "Does the SC have impairments/a medical condition that can lead to a disability?",
        options: [{ label: 'Yes', value: 1 },
        { label: 'No', value: 2 },
       
    ]
    }]



function RenderQuestion({ page, onSelect }) {
    let question = data[page - 1]
    
    return (
        <View style={{ marginTop: Metrics.doubleBaseMargin, width: "100%" }}>
            <Text style={{ fontSize: 18 }}>{`Question (${page}) : ${question.title}?`}</Text>
            <Text style={{ fontSize: 14, marginBottom: Metrics.doubleBaseMargin }}>Select one code</Text>
            <RadioGroup
                onSelect={onSelect}
                color='#3B83BD'
                size={22}
                style={{}}
            >
                {question.options.map(item => <RadioButton value={item.value} style={{ alignItems: "center" }}>
                    <Text>{item.label}</Text>
                </RadioButton>)}

            </RadioGroup>
        </View>
    )
}

export default class Questions extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 1
        };
    }


    componentDidMount() {



    }

    componentWillUnmount() {

    }
    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
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
                        style={{ zIndex: 1, width: 20 }}
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



                    <Text style={{ color: "#3B83BD", fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>SCI/SCU Questionnarie</Text>
                    <View style={{ width: 30, height: 2, backgroundColor: "#3B83BD" }} />
                    <RenderQuestion page={this.state.page} onSelect={(index, value) => this.onSelect(index, value)}/>

                    <TouchableOpacity style={{
                        width: "40%", height: 30,
                        borderRadius: 15, backgroundColor: "#CBDDEB"
                        , marginVertical: Metrics.baseMargin,
                        borderColor: "#5C7E9B", borderWidth: 1.5, opacity: .8, flexDirection: "row", alignItems: "center", justifyContent: "center"
                    }}>
                        <Image source={require('../../assets/Page3/6.png')} style={{ width: 20, height: 15, marginRight: 3 }} resizeMode="contain" />
                        <Text style={{ fontSize: 11, color: "#6D91B1" }}>Upload Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.state.page >= 5 ? null : this.setState({ page: this.state.page + 1 })}
                        style={{ width: "100%", height: 50, backgroundColor: "#2A71CD", borderRadius: 25, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 14 }}>{this.state.page == 5?"Submit":"Next"}</Text>
                    </TouchableOpacity>



                </ScrollView>
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
// [{ label: 'Yes (vaccination card show)', value: 1 },
//                                 { label: 'No (vaccination card not shown)', value: 2 },
//                                 { label: 'Yes (vaccination card not show)', value: 1 },
//                                 { label: `Don't no/know information provided`, value: 1 }]

