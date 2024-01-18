import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";
function GoalInput(props) {
    const [enteredGoaltext, setEnteredtext] = useState('');
    function goalInputHandler(enteredtext) {
        setEnteredtext(enteredtext);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoaltext);
        setEnteredtext('');
    }
    return (
        <Modal visible={props.visible} animationType="slide" >
            <Image style={styles.image} source={require('../assets/images/goal1.png')} />
            <View style={styles.InputField}>

                <TextInput placeholder='Enter Your Goal' style={styles.textField}
                    onChangeText={goalInputHandler}
                    value={enteredGoaltext} />
            </View>
            <View style={styles.buttonalign}>
                <Button title='Add Goal' onPress={addGoalHandler} color='green' />
                <Button title='Cancel' onPress={props.onCancel} color='gray' />
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({

    InputField: {
        borderWidth: 2,
        padding: 5,
        borderColor: 'gray',
        marginBottom: 20,
        marginTop: 100,
        width: '80%',
        marginLeft: 40,

    },
    buttonalign: {
        flexDirection: 'row',
        marginLeft: 100,
        justifyContent: 'space-between',
        marginRight: 100,

    },
    image: {
        width: 100,
        height: 100,
        marginTop: 100,
        marginLeft: 130,


    },


})