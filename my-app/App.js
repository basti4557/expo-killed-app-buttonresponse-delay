import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

import { defineTask } from 'expo-task-manager';

const BACKGROUND_NOTIFICATION_TASK = 'BACKGROUND-NOTIFICATION-TASK';
defineTask(BACKGROUND_NOTIFICATION_TASK, async (params) => {
  const taskPayload = params.data;
  const isNotificationResponse = 'actionIdentifier' in taskPayload;
  if (isNotificationResponse) {
     console.log('this hook NOW got triggered.');
  }
});
Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK).catch(console.error);

export default function App() {
  useEffect(() => {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C'
    });
    
    Notifications.setNotificationCategoryAsync("testCategory", [
      {
        identifier: "test",
        buttonTitle: "Test Press!",
        options: {
          isAuthenticationRequired: false,
          opensAppToForeground: false
        }
      },
    ]);
  }, [])
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
