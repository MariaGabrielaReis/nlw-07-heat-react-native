import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../theme';
import { useAuth } from '../../hooks/auth';

import { Button } from '../Button';
import { styles } from './styles';

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        title={'ENTRAR COM GITHUB'}
        color={COLORS.WHITE}
        backgroundColor={COLORS.CYAN}
        icon={'github'}
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}
