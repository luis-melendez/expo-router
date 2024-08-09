import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="(drawer)" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(drawer)" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
