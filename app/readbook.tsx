import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";

const Readbook = () => {
  const { bookSlug } = useLocalSearchParams();

  if (!bookSlug) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red" }}>Nie znaleziono książki.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        source={{
          uri: `https://wolnelektury.pl/media/book/txt/${bookSlug}.txt`,
        }}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default Readbook;
