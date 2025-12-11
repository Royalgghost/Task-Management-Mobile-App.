import React, { useState, useEffect } from 'react'; 
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'; 
 
export default function TaskList({ navigation, route }) { 
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (route.params?.newTask) {
      setTasks([...tasks, { title: route.params.newTask }]);
    }
  }, [route.params?.newTask]);

  const handleTaskPress = (task) => {
    navigation.navigate('TaskDetails', { task });
  };

    return ( 
        <View style={styles.container}> 
            <Button 
              title="Ajouter une tâche" 
              onPress={() => navigation.navigate('AddTask')} 
            />
            {tasks.map((t, index) => ( 
                <TouchableOpacity key={index} onPress={() => handleTaskPress(t)}>
                  <Text style={styles.taskText}>{t.title}</Text>
                </TouchableOpacity>
            ))} 
        </View> 
); 

} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskText: {
        padding: 10,
        fontSize: 16,
        marginVertical: 5,
    },
});