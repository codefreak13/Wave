import React, {FC, useMemo} from 'react';
import {Text, Alert, ActivityIndicator} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {graphql, useMutation} from 'react-relay';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {BackButton, PinKeyPad} from '../../../components';
import createStyles from './styles';
import {useTheme} from '../../../theme';

import {authData} from '../../../redux/reducers';
import {RootState} from '../../../redux';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ConfirmSecretCode: FC<IProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {secretCode, fullName, tokenId} = useSelector(
    (state: RootState) => state.auth,
  );

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {title} = styles;

  const [commit, isInFlight] = useMutation(graphql`
    mutation ConfirmSecretCodeMutation(
      $name: String!
      $tokenId: ID!
      $pin: String!
    ) {
      completeSignup(name: $name, tokenId: $tokenId, pin: $pin) {
        session {
          id
          user {
            id
            fullName
            mobile
            wallet {
              id
              balance
            }
          }
        }
      }
    }
  `);

  const bootstrapAsync = async (sessionId: string) => {
    await AsyncStorage.setItem('sessionId', sessionId);
  };

  if (isInFlight) {
    return <ActivityIndicator />;
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
            console.log(
              data?.completeSignup?.session.user,
              sessionId,
              'sessionId',
            );
            if (sessionId) {
              dispatch(authData({sessionId}));
              bootstrapAsync(sessionId);
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
