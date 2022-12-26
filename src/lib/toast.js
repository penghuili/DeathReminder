import Toast from 'react-native-toast-message';

export function showToast(message, type = 'success', durationInSeconds = 4) {
  Toast.show({
    type,
    text1: message,
    position: 'top',
    autoHide: true,
    visibilityTime: durationInSeconds * 1000,
    topOffset: 40,
    onPress: () => Toast.hide(),
  });
}

export function hideToast() {
  Toast.hide();
}
