import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { defineTask } from 'expo-task-manager';

defineTask(BACKGROUND_NOTIFICATION_TASK, async (params) => {
  const taskPayload = params.data;
  const isNotificationResponse = 'actionIdentifier' in taskPayload;
  if (isNotificationResponse) {
     console.log('this hook NOW got triggered.');
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
