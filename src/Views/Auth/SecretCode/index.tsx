import React, {FC, useMemo} from 'react';
import {View, Text, Pressable} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {BackButton} from '../../../components';
import createStyles from './styles';
import {useTheme} from '../../../theme';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SecretCode: FC<IProps> = ({navigation}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {main, title, resend} = styles;

  const _getPinKeyPadValue = (value: string) => {
    if (value.length == 4) {
      //this.props.navigation.navigate("onboarding_step8");
      console.log(value);
    }
  };

  return (
    <>
      <BackButton navigation={navigation} />
      <View style={main}>
        <Text style={title}>
          Enter the validation code we texted to {'\n'}r
        </Text>
        <CodeInput
          className={'border-b'}
          secureTextEntry
          codeLength={4}
          size={50}
          space={4}
          autoFocus={true}
          onFulfill={(code: any) => {
            navigation.navigate('');
          }}
          codeInputStyle={{fontWeight: '800', fontSize: 30}}
          //   containerStyle={{alignItems: 'center', paddingBottom: 150}}
          cellBorderWidth={1}
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

export default SecretCode;
