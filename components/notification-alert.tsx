import React, {useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export const NotificationAlert: React.FC<{
  message: string;
  onCancel: () => void;
  onOkay: () => void;
}> = ({message, onCancel, onOkay}) => {
  const transition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(transition, {
      toValue: 100,
      duration: 800,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.backdrop} />
      <Animated.View
        style={[
          styles.alertContainer,
          {
            transform: [
              {
                translateY: transition.interpolate({
                  inputRange: [0, 40, 100],
                  outputRange: [0, 70, 30],
                }),
              },
            ],
          },
        ]}>
        <Text style={styles.messageText}>{message}</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity
            onPress={onCancel}
            style={[styles.buttonContainer, {backgroundColor: '#B2B2B2'}]}>
            <View>
              <Text style={styles.buttonText}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onOkay}
            style={[styles.buttonContainer, {backgroundColor: '#654094'}]}>
            <View>
              <Text style={styles.buttonText}>Okay</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    width,
    height,
  },
  backdrop: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  alertContainer: {
    position: 'absolute',
    width: '70%',
    zIndex: 100,
    backgroundColor: '#EAEAEA',
    paddingTop: 24,

    marginVertical: 200,
    borderRadius: 8,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 18,
  },
  buttonContainer: {
    flex: 1,
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  messageText: {
    margin: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
});
