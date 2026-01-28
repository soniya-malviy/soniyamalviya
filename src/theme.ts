import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#070A12',
      paper: 'rgba(255,255,255,0.06)',
    },
    primary: {
      main: '#8B5CF6',
    },
    secondary: {
      main: '#22D3EE',
    },
    text: {
      primary: 'rgba(255,255,255,0.92)',
      secondary: 'rgba(255,255,255,0.68)',
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: { fontWeight: 800, letterSpacing: -0.6 },
    h2: { fontWeight: 800, letterSpacing: -0.4 },
    h3: { fontWeight: 800, letterSpacing: -0.3 },
    h4: { fontWeight: 750, letterSpacing: -0.2 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(14px)',
          backgroundImage:
            'linear-gradient(180deg, rgba(7,10,18,0.92), rgba(7,10,18,0.55))',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(255,255,255,0.08)',
          backgroundImage:
            'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
  },
})

