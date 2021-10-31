import React, {useMemo, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import * as Yup from 'yup';
import PhoneInput from 'react-native-phone-number-input';
import {useMutation} from 'react-relay';
import {useDispatch, useSelector} from 'react-redux';

import createStyles from './styles';
import {useTheme} from '../../../theme';
import {WaveButton, Loader} from '../../../components';
import {authData} from '../../../redux/reducers';
import {RootState} from '../../../redux';
import {SignUpNumberMutation} from '../../../gql';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SignUpNumber = ({navigation}: IProps) => {
  const dispatch = useDispatch();
  const {number, validateNumber, numberSuffix} = useSelector(
    (state: RootState) => state.auth,
  );

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {main, title, phoneView, flagStyle, phoneTextStyle} = styles;

  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .required('Phone Number is required')
      .label('number')
      .min(13),
  });

  useEffect(() => {
    const bootstrapAsync = async () => {
      const validateNumber = await validationSchema.isValid({number});
      dispatch(authData({validateNumber}));
    };
    bootstrapAsync();
  }, [number]);

  const handleSubmit = async () => {
    if (validateNumber) {
      dispatch(authData({number}));
      commit({
        variables: {
          number,
        },
        onCompleted(data: any) {
          const tokenId = data?.startSignup?.token?.id;
          if (tokenId) {
            dispatch(authData({tokenId}));
            navigation.navigate('CodeValidation');
          }
        },
      });
    }
  };

  const [commit, isInFlight] = useMutation(SignUpNumberMutation);

  if (isInFlight) {
    return <Loader />;
  }

  return (
    <View style={main}>
      <View style={phoneView}>
        <Text style={title}>Welcome to Wave! Enter your mobile to start</Text>
        <PhoneInput
          defaultValue={numberSuffix}
          defaultCode={'NG'}
          onChangeFormattedText={number => {
            dispatch(authData({number, validateNumber: false}));
          }}
          onChangeText={numberSuffix => {
            dispatch(authData({numberSuffix}));
          }}
          autoFocus
          textContainerStyle={phoneTextStyle}
          flagButtonStyle={flagStyle}
        />
      </View>
      <WaveButton
        buttonColor={number && validateNumber ? 'active' : 'inactive'}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default SignUpNumber;
