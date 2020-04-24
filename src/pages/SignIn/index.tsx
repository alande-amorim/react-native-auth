import React, { useState } from 'react';
import { View, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useAuth } from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SignIn: React.FC = () => {
  const { signIn, loading } = useAuth();
  const [clicked, setClicked] = useState(false);

  function handleSignIn() {
    !clicked && signIn();
    setClicked(true);
  }

  return (
    <View style={styles.container}>
      {clicked && <ActivityIndicator size="large" color="666" />}
      <Button title={clicked ? "Loading..." : "Sign In"} onPress={handleSignIn} />
    </View>
  )
};

export default SignIn;
