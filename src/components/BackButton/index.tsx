import React, {FC, useMemo} from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import createStyles from './styles';
import {useTheme} from '../../theme';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const BackButton: FC<IProps> = ({navigation}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Pressable style={styles.headerStyle} onPress={() => navigation.goBack()}>
      <Icon name="arrowleft" size={25} color={theme.colors.GREYISH_BROWN} />
    </Pressable>
  );
};

export default BackButton;
