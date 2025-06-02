import { useCallback, useState } from 'react';
import { RefreshControl, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [webViewKey, setWebViewKey] = useState(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setWebViewKey(prev => prev + 1);
    setRefreshing(false);
  }, []);

  return (
    <WebView
      key={webViewKey}
      source={{ uri: 'https://chat.lenaai.net?isWebView=true' }}
      style={styles.webview}
      scrollEnabled={true}
      bounces={true}
      showsVerticalScrollIndicator={true}
      decelerationRate={0.998}
      pullToRefreshEnabled={true}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      scalesPageToFit={false}
      cacheEnabled={true}
      cacheMode="LOAD_CACHE_ELSE_NETWORK"
      startInLoadingState={true}
      renderLoading={() => <View style={styles.webview} />}
      scrollEventThrottle={16}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      sharedCookiesEnabled={true}
      thirdPartyCookiesEnabled={true}
      webviewDebuggingEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 