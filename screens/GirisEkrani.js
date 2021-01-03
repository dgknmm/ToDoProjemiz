import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const theme = {
  Button: {
    titleStyle: {
      color: '#fff',
    },
  },
};

export default function GirisEkrani(props) {
  return (
    <View style={styles.container}>
      
      <Text></Text>
      <Text style={styles.text}>HOŞGELDİNİZ</Text>
      <Button icon={ <Icon name="arrow-right" size={15} color="white" style={{marginLeft:20}} /> }
        iconRight
        buttonStyle={styles.actionButton}
        title="İLERİ"
        onPress={()=>props.navigation.navigate('ToDo')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  text: {
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30
  },
  actionButton: {
    backgroundColor: 'red',
    padding:10,
  }
});