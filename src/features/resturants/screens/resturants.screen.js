import { Searchbar } from 'react-native-paper';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';

import ResturantInfoCard from '../components/resturants-info.component';

const ResurantsScreen =  () => (
    <SafeAreaView style={styles.container}>
        <View style={{ padding: 16, backgroundColor: 'green'}}>
          <Searchbar />
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: 'blue'}}>
          <ResturantInfoCard />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight   
    },
});

export default ResurantsScreen;