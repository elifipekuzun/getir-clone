import React, {useState, useRef} from 'react';
import {
  Modal,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import {Colors} from '../../lib/colors';

const CODE_LENGTH = 6;

export const CodeConfirmationModal: React.FC<{
  visible: boolean;
  phoneNumber: string;
  getCodeInput: (code: string) => void;
  onDismiss?: () => void;
}> = ({visible, getCodeInput, onDismiss, phoneNumber}) => {
  const [inputCode, setInputCode] = useState('');
  const inputRef = useRef<TextInput>(null);
  const [containerIsFocused, setContainerIsFocused] = useState(false);

  const codeDigitArray = new Array(CODE_LENGTH).fill(0);

  const toDigitInput = (_value: number, idx: number) => {
    const emptyInputChar = ' ';
    const digit = inputCode[idx] || emptyInputChar;

    const isCurrentDigit = idx === inputCode.length;
    const isLastDigit = idx === CODE_LENGTH - 1;
    const isCodeFull = inputCode.length === CODE_LENGTH;

    const isFocused = isCurrentDigit || (isLastDigit && isCodeFull);
    const containerStyle =
      containerIsFocused && isFocused
        ? {...styles.inputContainer, ...styles.inputContainerFocused}
        : styles.inputContainer;
    return (
      <View key={idx} style={containerStyle}>
        <Text style={styles.inputText}>{digit}</Text>
      </View>
    );
  };
  const handleOnPress = () => {
    setContainerIsFocused(true);
    inputRef.current?.focus();
  };
  const handleOnBlur = () => {
    setContainerIsFocused(false);
    getCodeInput(inputCode);
  };
  return (
    <Modal
      presentationStyle="pageSheet"
      animationType="slide"
      visible={visible}
      onRequestClose={onDismiss}
      onDismiss={onDismiss}>
      <View style={styles.mainContainer}>
        <Text style={styles.headerTitle}>One Time Code Confirmation</Text>
        <View style={styles.info}>
          <Text style={styles.infoText}>
            {phoneNumber} Cep telefonunuza gönderilen aktivasyon kodunu girin.
          </Text>
        </View>
        <Pressable style={styles.inputsContainer} onPress={handleOnPress}>
          {codeDigitArray.map(toDigitInput)}
        </Pressable>
        <TextInput
          ref={inputRef}
          value={inputCode}
          onChangeText={text => setInputCode(text)}
          onSubmitEditing={handleOnBlur}
          keyboardType="number-pad"
          returnKeyType="done"
          textContentType="oneTimeCode"
          maxLength={CODE_LENGTH}
          style={[styles.hiddenCodeInput]}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 1.2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white',
    paddingVertical: 50,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
  },
  info: {
    padding: 16,
    margin: 8,
  },
  infoText: {
    textAlign: 'center',
  },
  hiddenCodeInput: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },
  inputsContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 4,
    padding: 12,
  },
  inputContainerFocused: {
    borderColor: Colors.primary,
  },
  inputText: {
    fontSize: 24,
    fontFamily: 'Menlo-Regular',
  },
});
