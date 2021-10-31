import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {defaultThemeProps} from '../../../theme';

const createStyles = (theme: defaultThemeProps) =>
  StyleSheet.create({
    title: {
      fontSize: RFValue(14),
      color: theme.colors.BLACK,
      fontWeight: '500',
      textAlign: 'center',
    },
  });

export default createStyles;
