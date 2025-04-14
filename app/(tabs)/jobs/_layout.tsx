import { Stack } from 'expo-router';

export default function JobsLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Jobs',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerShadowVisible: false,
        }} 
      />
      <Stack.Screen 
        name="post" 
        options={{ 
          title: 'Post a Job',
          presentation: 'modal',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
        }} 
      />
      <Stack.Screen 
        name="[id]" 
        options={{ 
          title: 'Job Details',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
        }} 
      />
    </Stack>
  );
}