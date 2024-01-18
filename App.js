import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './component/GoalInput';
import GoalItem from './component/GoalItem';

export default function App() {
  const [modalIsVisible,setModalIsVisible]=useState(false)
  const [courseGoals,setCourseGoals]=useState([]);

  function addGoalHandler(enteredGoaltext) {
    setCourseGoals(currentCourseGoals =>[...currentCourseGoals,
      {text:enteredGoaltext, id:Math.random().toString() },]);
      setEndGoalHandler();
  }
  function deleteGoaltext (id)
  {
    setCourseGoals((currentCourseGoals) =>{
      return currentCourseGoals.filter((goal)=>goal.id !==id);
    });
  }
  function setAddGoalHandler ()
  {
    setModalIsVisible(true);
  }
  function setEndGoalHandler ()
  {
    setModalIsVisible(false);
  }
  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='green' onPress={setAddGoalHandler}/>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={setEndGoalHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData => {
          return (
            <GoalItem text={itemData.item.text}
            id={itemData.item.id}
            ondeleteGoal={deleteGoaltext}/>
          );
        }}
        keyExtractor={(item,index)=>{
          return item.id;
        }}
        />
          
      {/* /*- ************* piecse of Code ************ -*/
          
      //     <ScrollView  style={styles.TextInput}>
      //   {courseGoals.map((goal)=><Text key={goal} style={styles.space}>{goal}</Text>)}
      // </ScrollView>
      
      }
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:30,
    marginTop:50,
    
  },


});
