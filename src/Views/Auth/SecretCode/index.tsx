import React, {FC, useMemo} from 'react';
import {Text, Alert} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {BackButton, PinKeyPad} from '../../../components';
import createStyles from './styles';
import {useTheme} from '../../../theme';

import {authData} from '../../../redux/reducers';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SecretCode: FC<IProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {title} = styles;

  const _getPinKeyPadValue = (secretCode: string) => {
    if (secretCode.length == 4) {
      dispatch(authData({secretCode}));

      Alert.alert(
        'Easy Secret Code',
        'Are you sure you want to choose a secret code that is easy to guess?',
        [
          {
            text: 'CHANGE SECRET CODE',
            style: 'cancel',
          },
          {
            text: 'CONTINUE',
            onPress: () => navigation.navigate('ConfirmSecretCode'),
          },
        ],
        {
          cancelable: true,
        },
      );
    }
  };

  return (
    <>
      <BackButton navigation={navigation} />
      <Text style={title}>Create a new secret code</Text>
      <PinKeyPad
        getPinKeyPadValue={_getPinKeyPadValue}
        keypadButtonTextStyle={{color: theme.colors.BLACK}}
        activePinInputColor={theme.colors.NAVY_BLUE}
        inactivePinInputColor={theme.colors.SKY_BLUE}
      />
    </>
  );
};

export default SecretCode;
