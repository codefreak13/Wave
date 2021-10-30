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
      marginVertical: RFValue(50),
      justifyContent: 'space-between',
    },
    phoneView: {
      alignItems: 'center',
    },
    title: {
      fontSize: RFValue(14),
    },
    flagStyle: {
      borderBottomColor: theme.colors.WARM_GREY,
      borderBottomWidth: 1,
      paddingBottom: 0,
      marginRight: RFValue(20),
    },
    phoneTextStyle: {
      backgroundColor: theme.colors.WHITE,
      borderBottomColor: theme.colors.NAVY_BLUE,
      borderBottomWidth: 1,
      paddingBottom: 0,
    },
    error: {
      color: theme.colors.DANGER,
    },
  });

export default createStyles;
