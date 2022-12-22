import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  GestureResponderEvent,
} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {Colors} from '../../lib/colors';
import {CodeConfirmationModal} from './code-confirmation-modal';
import {useActions} from '../../hooks/useActions';

export const AuthForm: React.FC<{formType: string}> = ({formType}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState(formType);
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult>();

  const [codeModelVisible, setCodeModelVisible] = useState(false);
  const [code, setCode] = useState('');

  const {authSuccess} = useActions();

  const loginWithPhoneNumber = async (phoneNum: string) => {
    const confirmation = await auth().signInWithPhoneNumber('+90 ' + phoneNum);
    setConfirm(confirmation);
    setCodeModelVisible(true);
  };

  const submitHandler = async (event: GestureResponderEvent) => {
    event.preventDefault();
    await loginWithPhoneNumber(phoneNumber);
  };
  useEffect(() => {
    const codeConfirmation = async () => {
      try {
        const result = await confirm?.confirm(code);
        if (result?.user && result.additionalUserInfo) {
          setCodeModelVisible(false);
          authSuccess(
            fullName,
            email,
            phoneNumber,
            result.user.uid,
            result.additionalUserInfo?.isNewUser,
          );
        }
      } catch (error) {
        console.log('Invalid code');
      }
    };
    if (code.length === 6) {
      codeConfirmation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirm, code]);

  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="+90 🇹🇷"
          placeholderTextColor={'#000'}
          style={[styles.input, styles.codeInput]}
          editable={false}
        />
        <TextInput
          textContentType="telephoneNumber"
          placeholder="Phone number"
          style={[styles.input, styles.phoneInput]}
          keyboardType="number-pad"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>
      <Text style={styles.info}>
        Giriş için cep telefonunuza tek kullanımlık şifre göndereceğiz.
      </Text>
      {formStatus !== 'login' && (
        <View>
          <TextInput
            value={fullName}
            onChangeText={text => setFullName(text)}
            placeholder="Full Name"
            style={[styles.input, styles.signupInput]}
          />
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="off"
            style={[styles.input, styles.signupInput]}
          />
        </View>
      )}
      <TouchableOpacity
        disabled={phoneNumber.length === 0}
        onPress={submitHandler}>
        <View
          style={[styles.button, phoneNumber.length === 0 && styles.disabled]}>
          <Text style={styles.buttonTitle}>
            {formStatus === 'login' ? 'Login' : 'Sign Up'}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.horizontalLine} />
      <View style={styles.actionButtonContainer}>
        {formStatus === 'login' && <Text>Don't you have an account yet?</Text>}
        {formStatus !== 'login' && <Text>You have an account already?</Text>}
        <Button
          title={formStatus === 'login' ? 'Sign Up' : 'Login'}
          color={Colors.primary}
          onPress={() =>
            setFormStatus(formStatus === 'login' ? 'signup' : 'login')
          }
        />
      </View>
      <CodeConfirmationModal
        getCodeInput={codeInput => setCode(codeInput)}
        visible={codeModelVisible}
        phoneNumber={phoneNumber}
        onDismiss={() => {
          setCodeModelVisible(false);
          setConfirm(undefined);
          setCode('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(92,60,187, 0.3)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    marginRight: 12,
  },
  signupInput: {
    marginTop: 8,
  },
  codeInput: {
    width: '30%',
  },
  phoneInput: {
    width: '60%',
  },
  button: {
    backgroundColor: Colors.primary,
    margin: 12,
    paddingVertical: 12,
    borderRadius: 6,
  },
  disabled: {
    backgroundColor: 'rgba(92,60,187, 0.4)',
  },
  buttonTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  info: {
    marginHorizontal: 32,
    marginVertical: 12,
  },
  horizontalLine: {
    borderTopWidth: 1,
    borderColor: 'rgba(92,60,187, 0.3)',
    marginHorizontal: 12,
    marginVertical: 16,
  },
  actionButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
