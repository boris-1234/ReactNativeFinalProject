import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { TextInput, Button } from "react-native";

// 1. import  useEffect, useCallback
// 2. Add headerRight, with empty onPress.
// 3. Create `saveFilters` function that will hold the filters the user does,
// Also will print every running time to console, and will be updated depending on dependencies
// 4. Add useEffect -> keeps the result in params.
// 5. Add data to onPress of headerRight
// 6. see in console after change.
const headerStyle = {
    fontSize: "19px",
    fontWeight: "bold"
}
const titleStyle = {
    fontSize: "16px"
}
const inputStyle = {
    borderBottomWidth: 1.0
}
const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primary }}
                thumbColor={Platform.OS === "android" ? Colors.primary : ""}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    );
};




const PaymentScreen = (props) => {

    //user details
    const [userName, setUsername] = useState('');
    const [lastUsername, setLastUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

     //user credit details
     //const [ownerName, setOwnerName] = useState('');
   // const [natId, setNatId] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [exp, setExp] = useState('');
    const [cvv, setCvv] = useState('');
    

    // 2
    // const [isForFamilies, setIsForFamilies] = useState(false);
    // const [isForDisabled, setIsForDisabled] = useState(false);
    // const [hasWater, setHasWater] = useState(false);
    // const [isUrban, setIsUrban] = useState(false);

    // const saveFilters = useCallback(() => {
    //     // Data to store:
    //     const appliedFilters = {
    //         forFamilies: isForFamilies,
    //         forDisabled: isForDisabled,
    //         hasWater: hasWater,
    //         isUrban: isUrban,
    //     };
    //     // print to console so we can see the result:
    //     console.log(appliedFilters);
    //     // dependencies: when they change - the function updates
    // }, [isForFamilies, isForDisabled, hasWater, isUrban]);

    // useEffect() function will run After  the current render cycle.
    // in the end of cycle

    // useEffect(() => {
    //     // save - can be any name. we will use it later.
    //     props.navigation.setParams({ save: saveFilters });
    //     // dependencies: when it changes -> update.
    // }, [saveFilters]);
    function btnConfirm() {
       if(userName===""||
       lastUsername===""||
       email===""||
       phone===""||
       country===""||
       city===""||
       cvv===""||
       exp===""||
       cardNum==="")
        alert('One of fields is missing');
        else
       {
        // alert('navigating');
        //props.navigation.replace('PayComplete');
            props.navigation.navigate({
              routeName: "PayComplete"//,
            //   params: {
            //     categoryId: itemData.item.id,
            //   },
            });
         
       }
    }
    return (

        <View style={styles.screen}>
            <View>
                <Text style={headerStyle}> Payment Page </Text>
                <br />

                <Text style={titleStyle}>Enter Name*</Text>
                <TextInput
                    // ref={(el) => { userName = el; }}
                    onChangeText={(userName) => setUsername( userName )}
                    value={userName}
                    style={inputStyle}
                    placeholder="Name" />
                <br />

                <Text style={titleStyle}>Enter Last Name*</Text>
                <TextInput
                onChangeText={(lastUsername) => setLastUsername( lastUsername )}
                value={lastUsername}
                    style={inputStyle}
                    secureTextEntry={false}
                    placeholder="Last Name"
                />
                <br />

                <Text style={titleStyle}>Enter Email*</Text>
                <TextInput
                 onChangeText={(email) => setEmail( email )}
                 value={email}
                    style={inputStyle}
                    secureTextEntry={false}
                    placeholder="Email"
                />
                <br />

                <Text style={titleStyle}>Enter Phone Number*</Text>
                <TextInput
                 onChangeText={(phone) => setPhone( phone )}
                 value={phone}
                    style={inputStyle}
                    placeholder="Phone Number" />
                <br />
                <Text style={titleStyle}>Enter State*</Text>
                <TextInput
                onChangeText={(country) => setCountry( country )}
                value={country}
                    style={inputStyle}
                    secureTextEntry={false}
                    placeholder="State"
                />
                <br />

                <Text style={titleStyle} >Enter City*</Text>
                <TextInput
                 onChangeText={(city) => setCity( city )}
                 value={city}
                    style={inputStyle}
                    secureTextEntry={false}
                    placeholder="City"
                />
                <br />

                <Text style={titleStyle}>Enter Address*</Text>
                <TextInput
                 onChangeText={(address) => setAddress( address )}
                 value={address}
                    style={inputStyle}
                    secureTextEntry={false}
                    placeholder="Street + Number"
                />
                <br />

                <Text style={titleStyle}>Enter Credit Card Number*</Text>
                <TextInput
                onChangeText={(cardNum) => setCardNum( cardNum )}
                value={cardNum}
                    style={inputStyle}
                    placeholder="Credit Card Number" />
                <br />

                <Text style={titleStyle}>Enter CVV*</Text>
                <TextInput
                onChangeText={(cvv) => setCvv( cvv )}
                value={cvv}
                    style={inputStyle}
                    secureTextEntry={false}
                    placeholder="CVV"
                />
                <br />
                <Text style={titleStyle}>Enter Expiration Date*</Text>
                <TextInput
                onChangeText={(exp) => setExp( exp )}
                value={exp}
                    style={inputStyle}
                    secureTextEntry={false}
                    placeholder="Expiration Date"
                />
                <br />
                <Button onPress={btnConfirm} title='Confirm'></Button>

            </View>
        </View>
    );
};

PaymentScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Payment Page",
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
        // Add headerRight of save icon.
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Save"
                    iconName="ios-save"
                    onPress={navData.navigation.getParam("save")}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        margin: 20,
        textAlign: "center",
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginVertical: 15,
    },
});

export default PaymentScreen;