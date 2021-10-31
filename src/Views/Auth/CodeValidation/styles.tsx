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
    title: {
      fontSize: RFValue(14),
      color: theme.colors.BLACK,
      fontWeight: '500',
      textAlign: 'center',
    },
    resend: {
      color: theme.colors.NAVY_BLUE,
    },
    codeInput: {
      fontWeight: '500',
      fontSize: 25,
    },
  });

export default createStyles;
