import React from 'react';
import { TextInput, View } from 'react-native';

import { Button } from '../Button';

import { COLORS } from '../../theme';
import { styles } from './styles';
import { useState } from 'react';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendindMessage, setSendingMessage] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardAppearance={'dark'}
        placeholder={'Qual sua expectativa para o evento?'}
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={150}
        value={message}
        onChangeText={setMessage}
        editable={!sendindMessage}
      />
      <Button
        title={'ENVIAR MENSAGEM'}
        backgroundColor={COLORS.CYAN}
        color={COLORS.WHITE}
      />
    </View>
  );
}
