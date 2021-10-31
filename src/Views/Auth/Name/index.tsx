import React, {useMemo, useState, useEffect} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';

import {BackButton} from '../../../components';
import createStyles from './styles';
import {useTheme} from '../../../theme';

import {authData} from '../../../redux/reducers';

import {WaveButton} from '../../../components';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const Name = ({navigation}: IProps) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {
    main,
    title,
    nameView,
    textInput,
    terms,
    termsText,
    termsMain,
    termsTitle,
    termsBtn,
    conditions,
  } = styles;

  const [state, setstate] = useState({
    fullName: '',
    validate: false,
    showModal: false,
  });
  const {fullName, validate, showModal} = state;

  const handleSubmit = () => {
    if (validate) {
      dispatch(authData({fullName}));
      navigation.navigate('SecretCode');
    }
  };

  useEffect(() => {
    const bootstrapAsync = async () => {
      const regexs = /^[آ-یA-z]{2,}( [آ-یA-z]{2,})+([آ-یA-z]|[ ]?)$/;
      const validate = regexs.test(fullName);
      setstate({...state, validate});
    };
    bootstrapAsync();
  }, [fullName]);

  const modalToggle = () => {
    setstate({...state, showModal: !showModal});
  };

  return (
    <>
      <BackButton navigation={navigation} />
      <View style={main}>
        <View style={nameView}>
          <Text style={title}>Please enter your full legal name</Text>
          <TextInput
            onChangeText={fullName => setstate({...state, fullName})}
            style={textInput}
            autoFocus={true}
          />
          <Text style={terms}>
            By signing up I agree to Wave's{' '}
            <Text onPress={modalToggle} style={termsText}>
              Terms and Conditions
            </Text>
          </Text>
        </View>
        <WaveButton
          buttonColor={fullName && validate ? 'active' : 'inactive'}
          onPress={handleSubmit}
        />
      </View>

      <Modal
        isVisible={showModal}
        onBackButtonPress={modalToggle}
        onBackdropPress={modalToggle}
        hasBackdrop={true}
        animationIn="slideInUp"
        animationInTiming={750}
        coverScreen={true}
        useNativeDriver={true}
        animationOut="slideOutDown">
        <View style={termsMain}>
          <ScrollView>
            <Text style={termsTitle}>Terms and Conditions</Text>
            <Text style={conditions}>
              {'\n'} Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam blanditiis harum quisquam
              eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
              {'\n'}
              {'\n'} eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid. {'\n'}
              {'\n'}
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. {'\n'}
              {'\n'}Sit laborum ab, eius fugit doloribus tenetur fugiat,
              temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime doloremque.{'\n'}
              {'\n'}
            </Text>
            <Text onPress={modalToggle} style={termsBtn}>
              OK
            </Text>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default Name;
