import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import ResurantsScreen from "./src/features/resturants/screens/resturants.screen";

export default function App() {
  return (
    <>
      <ResurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

