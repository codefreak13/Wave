import React, { FC } from 'react';
import { useColorScheme } from 'react-native';
import { lightColors, darkColors, ColorValue } from './colors';

export const ThemeContext = React.createContext({
     isDark: false,
     colors: lightColors,
     setScheme: (scheme: string) => { },
});

interface IProps {
     children: React.ReactNode;
}

export type defaultThemeProps = {
     isDark: boolean;
     colors: ColorValue;
     setScheme(scheme: string): void
}

const ThemeProvider: FC<IProps> = props => {
     const colorScheme = useColorScheme();

     const [isDark, setIsDark] = React.useState(colorScheme === 'dark');

     React.useEffect(() => {
          setIsDark(colorScheme === 'dark');
     }, [colorScheme]);

     const defaultTheme: defaultThemeProps = {
          isDark,
          colors: isDark ? darkColors : lightColors,
          setScheme: (scheme: string) => setIsDark(scheme === 'dark'),
     };

     return (
          <ThemeContext.Provider value={defaultTheme}>
               {props.children}
          </ThemeContext.Provider>
     );
};

export default ThemeProvider;

export const useTheme = () => React.useContext(ThemeContext);
