export const theme = {
    color: {
        error: '#E03131',
        main: '#3068D3',
        navy: '#0A4595',
        skyblue: '#5387EC',
        background: '#F3F7FF',
        point: '#A1B5DC',
        white: '#FFFFFF',
        black: '#343434',
        gray900: '#5A5A5A',
        gray700: '#B6B6B6',
        gray500: '#E0E0E0',
        gray300: '#F0F0F0',
    },
} as const;

declare module '@emotion/react' {
    type ThemeType = typeof theme;
    export interface Theme extends ThemeType {}
}
