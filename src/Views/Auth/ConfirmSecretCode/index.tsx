import React, {FC, useMemo} from 'react';
import {Text, Alert} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {useMutation} from 'react-relay';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {BackButton, PinKeyPad, Loader} from '../../../components';
import createStyles from './styles';
import {useTheme} from '../../../theme';
import {authData} from '../../../redux/reducers';
import {RootState} from '../../../redux';
import {ConfirmSecretCodeMutation} from '../../../gql';
import {SESSION_ID} from '../../../constants';
import {AuthStackParamList} from '../../../navigation';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<AuthStackParamList>;
}

const ConfirmSecretCode: FC<IProps> = ({navigation, route}) => {
  const secretCode = route?.params?.secretCode;
  const dispatch = useDispatch();
  const {fullName, tokenId} = useSelector((state: RootState) => state.auth);
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {title} = styles;

  const [commit, isInFlight] = useMutation(ConfirmSecretCodeMutation);

  const bootstrapAsync = async (sessionId: string) => {
    await AsyncStorage.setItem(SESSION_ID, sessionId);
  };

  if (isInFlight) {
    return <Loader />;
  }

  const _getPinKeyPadValue = (value: string) => {
    if (value.length == 4) {
      if (secretCode === value) {
        commit({
          variables: {
            name: fullName,
            tokenId,
            pin: secretCode,
          },
          onCompleted(data: any) {
            const sessionId = data?.completeSignup?.session?.id;
            if (sessionId) {
              bootstrapAsync(sessionId);
              dispatch(authData({sessionId}));
            }
          },
        });
      } else {
        Alert.alert(
          'Easy Secret Code',
          'Oops! You secret codes do not match?',
          [
            {
              text: 'EDIT SECRET CODE',
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
          },
        );
      }
    }
  };

  return (
    <>
      <BackButton navigation={navigation} />
      <Text style={title}>Confirm your new secret code</Text>
      <PinKeyPad
        getPinKeyPadValue={_getPinKeyPadValue}
        keypadButtonTextStyle={{color: theme.colors.BLACK}}
        activePinInputColor={theme.colors.NAVY_BLUE}
        inactivePinInputColor={theme.colors.SKY_BLUE}
      />
    </>
  );
};

export default ConfirmSecretCode;
