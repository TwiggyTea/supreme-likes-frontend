import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function ChoiceEighteen({routerprops, insightId}) {

    const setChoiceEighteen = (data, id) => {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "choiceEighteen": data
            })
        
        }
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-update/${id}/`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .then(() => routerprops.history.push("/choice-nineteen"))
            .catch((error) => alert(error))
    } 

    return (
        <View>
            <Text>
                Which do you like more?
            </Text>
            <Button
                onPress={() => setChoiceEighteen("Birthday parties", insightId)}
                title="Birthday parties"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text>
                or
            </Text>
            <Button
            onPress={() => setChoiceEighteen("Sporting events", insightId)}
                title="Sporting events"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default ChoiceEighteen;