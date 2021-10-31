import React, {FC, useMemo} from 'react';
import {Text, Alert} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {BackButton, PinKeyPad} from '../../../components';
import createStyles from './styles';
import {useTheme} from '../../../theme';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SecretCode: FC<IProps> = ({navigation}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {title} = styles;

  const callToAction = (secretCode: string) => {
    navigation.navigate('ConfirmSecretCode', {secretCode});
  };

  const _getPinKeyPadValue = (secretCode: string) => {
    if (secretCode.length == 4) {
      Alert.alert(
        'Easy Secret Code',
        'Are you sure you want to choose a secret code that is easy to guess?',
        [
          {
            text: 'CHANGE SECRET CODE',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'CONTINUE',
            onPress: () => {
              callToAction(secretCode);
            },
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
