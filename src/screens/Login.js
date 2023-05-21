import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button} from 'react-native-paper';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const firebaseAuth = getAuth();

  const validateFields = () => {
     if(email && password){
      setButtonDisabled(false)
     }
  }

  const doLogin = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
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
      <Text style={styles.title}>Login</Text>
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
      <Button icon="login" disabled={buttonDisabled} style={styles.button} mode="contained" onPress={doLogin}>Entrar</Button>
      <Text style={styles.register}> Não Possui Conta?, <Text onPress={()=>{}}>Cadastre-se</Text></Text>
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
    width: '30%'
}
  
});

export default Login