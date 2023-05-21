import { View, Text, Pressable, StyleSheet, FlatList,TextInput  } from "react-native";
import { Button, Card } from 'react-native-paper';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

const taskss = [
    {id: 1, msg:"Lorem ipsum Lorem ipsum Lorem ipsum1", isChecked: false},
    {id: 2, msg:"Lorem ipsum Lorem ipsum Lorem ipsum2", isChecked: false},
    {id: 3, msg:"Lorem ipsum Lorem ipsum Lorem ipsum3", isChecked: false},
    {id: 4, msg:"Lorem ipsum Lorem ipsum Lorem ipsum4", isChecked: false},
    {id: 5, msg:"Lorem ipsum Lorem ipsum Lorem ipsum5", isChecked: false},
    {id: 6, msg:"Lorem ipsum Lorem ipsum Lorem ipsum6", isChecked: false},
    {id: 7, msg:"Lorem ipsum Lorem ipsum Lorem ipsum7", isChecked: false}
]
const Home = () => {
    const [tasks, setTasks] = useState(taskss);
    const [msg, setMsg] = useState('');

    const handleChange = (id) => {
        let temp = tasks.map((tasks) => {
            if (id === tasks.id) {
                return { ...tasks, isChecked: !tasks.isChecked };
            }
            return tasks;
        });
        setTasks(temp);
    };

    const handleDelete = (task) => {
        let temp = tasks.map((tasks) => {
            if (task != tasks) {
                return tasks;
            }
            return 'a';
        });
        temp.splice(temp.indexOf('a'),1)
        setTasks(temp);
    }

    const handleAdd = (msg) => {
        let temp = tasks.map((tasks) => {
            return tasks;
        });
        let tesk_info = {id: temp.length+1, msg:msg, isChecked: false}
        temp.push(tesk_info)
        setTasks(temp);
        setMsg('')
    }

    const renderFlatList = (renderData) => {
        return (
            <FlatList
                data={renderData}
                renderItem={({ item }) => (
                    <Card style={{ margin: 5 }}>
                        <View style={styles.task}>
                            <Pressable style={{display:'flex',flexDirection:'row',width:'95%'}} onPress={() => handleChange(item.id)} >
                                <MaterialCommunityIcons style={{paddingRight: '1%'}} name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={24} color="#000" />
                                <Text>{item.msg}</Text>
                            </Pressable >
                            <Pressable>
                                <MaterialCommunityIcons onPress={() => handleDelete(item)} name='trash-can-outline' size={24} color="#000" />  
                            </Pressable>
                        </View>
                    </Card>
                )}
            />
        );
    }


    return(
        <View style={styles.container}>
            <Text style={styles.title}>ToDo List</Text>
            <View style={styles.task_conteiner}>
                <TextInput
                    style={styles.input}
                    onChangeText={setMsg}
                    value = {msg}
                    placeholder="Escreva Aqui"
                    keyboardType="numeric"
                />
                <Button icon="bookmark-plus" style={styles.add} mode="contained" onPress={() => handleAdd(msg)}>Add</Button>
                {renderFlatList(tasks)}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3F89AB',
      alignItems: 'center',
      justifyContent: 'top',
    },
    input: {
        backgroundColor:'#FFFFFF',
        borderRadius: '4px',
        padding: '1%'
    },
    title: {
        color: '#FFFFFF',
        fontSize: '6vw',
        fontWeight: 'bold',
        margin: '2%'
    },
    task_conteiner: {
        flex: 1,
        margin: '1%',
        width: '80%',
        gap: '4px'
        
    },
    task: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: '1%',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    add:{
        backgroundColor: '#084059',
        borderRadius: '4px'
    }
  });

export default Home;