import { Pressable, StyleSheet, Text, View } from 'react-native';
function GoalItem (props)
{
    return(
        <View style={styles.TextInput}>
            <Pressable android_ripple={{color:'gray'}} onPress={props.ondeleteGoal.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.space}>{props.text}</Text>
            </Pressable>
        </View>
    );
}
export default GoalItem;

const styles = StyleSheet.create({

    TextInput:{
        margin:8,
        borderRadius:6,
        backgroundColor:'black'
    },
    space:{
        color:'white',
        padding:12,
    },
    pressedItem:{
        opacity:0.5,
    },
});