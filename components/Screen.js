import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ScrollView>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default Screen;