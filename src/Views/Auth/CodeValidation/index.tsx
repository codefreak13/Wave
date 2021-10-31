import React, {FC, useMemo} from 'react';
import {View, Text, Pressable} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useMutation} from 'react-relay';
import {useSelector} from 'react-redux';

import {BackButton, Loader} from '../../../components';
import createStyles from './styles';
import {useTheme} from '../../../theme';
import {RootState} from '../../../redux';
import {CodeValidationMutation} from '../../../gql';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const CodeValidation: FC<IProps> = ({navigation}) => {
  const {number, tokenId} = useSelector((state: RootState) => state.auth);

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {main, title, resend} = styles;

  const [commit, isInFlight] = useMutation(CodeValidationMutation);

  if (isInFlight) {
    return <Loader />;
  }

  const handleSubmit = (authCode: string) => {
    commit({
      variables: {
        authCode,
        tokenId,
      },
      onCompleted(data: any) {
        const success = data?.validateMobile?.success;
        success && navigation.navigate('Name');
      },
      onError(err) {
        console.log(err);
      },
    });
  };

  return (
    <>
      <BackButton navigation={navigation} />
      <View style={main}>
        <Text style={title}>
          Enter the validation code we texted to {'\n'} {number}
        </Text>
        <CodeInput
          codeLength={4}
          size={50}
          space={4}
          keyboardType="number-pad"
          autoFocus={true}
          onFulfill={(authCode: any) => {
            handleSubmit(authCode);
          }}
          codeInputStyle={{fontWeight: '800', fontSize: 30}}
          cellBorderWidth={1}
          className="border-b"
          inactiveColor="#B4B4B4"
          activeColor="#000"
        />
        <Pressable>
          <Text style={resend}>Resend SMS</Text>
        </Pressable>
      </View>
    </>
  );
};

export default CodeValidation;
