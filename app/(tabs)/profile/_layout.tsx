import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Profile',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerShadowVisible: false,
        }} 
      />
      <Stack.Screen 
        name="edit" 
        options={{ 
          title: 'Edit Profile',
          presentation: 'modal',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
        }} 
      />
      <Stack.Screen 
        name="reviews" 
        options={{ 
          title: 'Reviews & Ratings',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
        }} 
      />
      <Stack.Screen 
        name="documents" 
        options={{ 
          title: 'Documents & KYC',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
        }} 
      />
      <Stack.Screen 
        name="payments" 
        options={{ 
          title: 'Payment Settings',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
        }} 
      />
    </Stack>
  );
}