import { ThemeProvider, Global } from '@emotion/react';
import { global } from './global';
import theme from './theme';

export const StyleProvider = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={global}></Global>
            {children}
        </ThemeProvider>
    );
};

import '@emotion/react';

declare module '@emotion/react' {
    type ThemeType = typeof theme;
    interface Theme extends ThemeType {}
}
