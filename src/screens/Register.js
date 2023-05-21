import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button} from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const firebaseAuth = getAuth();

  const validateFields = () => {
     if(email && password){
      setButtonDisabled(false)
     }
  }

  const doRegister = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registar</Text>
      <TextInput 
        style={styles.input}
        value={email}
        onChangeText={(text) => {setEmail(text);validateFields()}}
        placeholder="Digite seu email"
      ></TextInput>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => {setPassword(text);validateFields()}}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      ></TextInput>
      <Button icon="login-variant" disabled={buttonDisabled} style={styles.button} mode="contained" onPress={doRegister}>Registrar</Button>
      <Text style={styles.register}>Já Possui Conta?, <Text onPress={()=>{}}>Faça Login</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F89AB',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1%'
  },
  register: {
    color: '#FFFFFF'
  },
  title: {
    color: '#FFFFFF',
    fontSize: '6vw',
    fontWeight: 'bold',
    margin: '2%'
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding:'1%',
    borderRadius: '4px',
    width: '50%'
  },
  button:{
    backgroundColor: '#084059',
    borderRadius: '4px',
    color: '#FFFFFF',
    fontWeight: 'bold',
    width: '30%',
}
  
});

export default Register