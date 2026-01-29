import '../app.css'

import { Stack } from 'expo-router';
import { View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <QueryClientProvider client={queryClient}>
        <View className="bg-white dark:bg-black" style={{ flex: 1, paddingTop: insets.top }}>
          
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: 'transparent' },
            }}
          >
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          </Stack>
          
        </View>
    </QueryClientProvider>
  );
}