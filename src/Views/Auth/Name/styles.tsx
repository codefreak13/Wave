import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {defaultThemeProps} from '../../../theme';

const createStyles = (theme: defaultThemeProps) =>
  StyleSheet.create({
    main: {
      width: '90%',
      flex: 1,
      alignSelf: 'center',
      alignItems: 'center',
      marginVertical: RFValue(20),
      justifyContent: 'space-between',
    },
    nameView: {
      alignItems: 'center',
      width: '100%',
    },
    title: {
      fontSize: RFValue(14),
      color: theme.colors.BLACK,
      fontWeight: '500',
    },
    textInput: {
      borderBottomWidth: 1,
      borderColor: theme.colors.NAVY_BLUE,
      fontSize: RFValue(14),
      width: '100%',
      alignSelf: 'center',
      paddingLeft: RFValue(20),
      marginVertical: RFValue(8),
      color: theme.colors.GREYISH_BROWN,
      paddingBottom: RFValue(-20),
    },
    terms: {
      fontSize: RFValue(10),
      color: theme.colors.WARM_GREY,
    },
    termsText: {
      textDecorationLine: 'underline',
    },
    termsMain: {
      backgroundColor: theme.colors.WHITE,
      flex: 1,
      paddingHorizontal: RFValue(16),
      paddingTop: RFValue(8),
      marginVertical: RFValue(25),
    },
    termsTitle: {
      fontWeight: 'bold',
      padding: RFValue(10),
      fontSize: RFValue(18),
      color: theme.colors.BLACK,
    },
    termsBtn: {
      textAlign: 'right',
      fontWeight: 'bold',
      marginRight: RFValue(25),
      color: theme.colors.NAVY_BLUE,
      fontSize: RFValue(15),
    },
    conditions: {
      color: theme.colors.BLACK,
      fontSize: RFValue(13),
    },
  });

export default createStyles;
