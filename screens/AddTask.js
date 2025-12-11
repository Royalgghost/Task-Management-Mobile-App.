import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTask({ navigation }) {
    const [taskTitle, setTaskTitle] = useState('');

    const handleAddTask = () => {
        if (taskTitle.trim()) {
            navigation.navigate({
                name: 'TaskList',
                params: { newTask: taskTitle },
                merge: true,
            });
            setTaskTitle('');
        }
    };

        return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Entrez le titre de la tâche"
                value={taskTitle}
                onChangeText={setTaskTitle}
            />
            <Button title="Valider" onPress={handleAddTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        fontSize: 16,
    },
});
