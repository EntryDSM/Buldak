import { ThemeProvider, Global } from '@emotion/react';
import { global } from './global';
import theme from './theme';

export const StyleProvider: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={global} />
            {children}
        </ThemeProvider>
    );
};

import '@emotion/react';

declare module '@emotion/react' {
    type ThemeType = typeof theme;
    interface Theme extends ThemeType {}
}
