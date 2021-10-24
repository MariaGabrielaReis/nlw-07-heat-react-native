import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';
import { styles } from './styles';

export function MessageList() {
  const message = {
    id: '1',
    text: 'teste',
    user: {
      name: 'maby',
      avatar_url: 'https://github.com/MariaGabrielaReis.png',
    },
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps={'never'}
    >
      <Message data={message} />
    </ScrollView>
  );
}
