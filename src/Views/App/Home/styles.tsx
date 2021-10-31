import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {defaultThemeProps} from '../../../theme';

const createStyles = (theme: defaultThemeProps) =>
  StyleSheet.create({
    main: {
      justifyContent: 'center',
      flex: 1,
      paddingHorizontal: RFValue(30),
    },
    text: {
      fontSize: RFValue(14),
      color: theme.colors.BLACK,
      fontWeight: '400',
      margin: RFValue(13),
    },
    value: {
      fontSize: RFValue(15),
      color: theme.colors.BLACK,
      fontWeight: '600',
    },
  });

export default createStyles;
