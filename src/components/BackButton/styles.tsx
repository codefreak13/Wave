import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {defaultThemeProps} from '../../theme';

const createStyles = (theme: defaultThemeProps) =>
  StyleSheet.create({
    headerStyle: {
      alignSelf: 'flex-start',
      //   marginBottom: RFValue(20),
      margin: RFValue(20),
      backgroundColor: theme.colors.WHITE,
    },
  });

export default createStyles;
