import React from 'react'; 
import { View, Text, Button, StyleSheet } from 'react-native'; 
 
export default function Accueil({ navigation }) { 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.title}>Bienvenue sur l'écran d'accueil 🎉</Text> 
      <Text style={styles.text}>Appuyez sur le bouton pour aller au profil.</Text> 
 
      <Button 
        title="Aller au profil" 
        onPress={() => navigation.navigate('Profil', { nom: 'sarah' })} 
      /> 
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#eaf4ff', 
  }, 
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    color: '#333', 
  }, 
  text: { 
    fontSize: 16, 
    marginBottom: 20, 
    color: '#555', 
  }, 
});