import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {defaultThemeProps} from '../../theme';

const createStyles = (theme: defaultThemeProps) =>
  StyleSheet.create({
    buttonStyle: {
      width: '100%',
      padding: RFValue(10),
      borderRadius: RFValue(25),
      alignItems: 'center',
    },
    textStyle: {
      color: theme.colors.WHITE,
      fontSize: RFValue(18),
      textAlign: 'center',
    },
  });

export default createStyles;
