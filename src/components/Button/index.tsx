import React, {FC, useMemo} from 'react';
import {Pressable, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';

import createStyles from './styles';
import {useTheme} from '../../theme';

interface IProps {
  title?: string;
  buttonColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  disabled?: boolean;
}

const Button: FC<IProps> = ({
  title,
  buttonStyle,
  textStyle,
  buttonColor,
  onPress,
  disabled,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Pressable
      disabled={disabled}
      style={[
        styles.buttonStyle,
        buttonStyle,
        {
          backgroundColor:
            buttonColor === 'active'
              ? theme.colors.NAVY_BLUE
              : theme.colors.SKY_BLUE,
        },
      ]}
      onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{title || 'Next'}</Text>
    </Pressable>
  );
};

export default Button;
