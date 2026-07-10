import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0a',
      paper: 'rgba(255,255,255,0.04)',
    },
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#cccccc',
    },
    secondary: {
      main: '#888888',
      light: '#aaaaaa',
      dark: '#666666',
    },
    text: {
      primary: 'rgba(255,255,255,0.95)',
      secondary: 'rgba(255,255,255,0.55)',
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily:
      '"Inter", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
    h1: { fontWeight: 800, letterSpacing: -0.8 },
    h2: { fontWeight: 800, letterSpacing: -0.5 },
    h3: { fontWeight: 700, letterSpacing: -0.3 },
    h4: { fontWeight: 700, letterSpacing: -0.2 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#333 #0a0a0a',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px) saturate(180%)',
          backgroundImage: 'none',
          backgroundColor: 'rgba(10,10,10,0.85)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(255,255,255,0.06)',
          backgroundImage: 'none',
          backgroundColor: 'rgba(255,255,255,0.03)',
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
        },
        contained: {
          backgroundColor: '#ffffff',
          color: '#0a0a0a',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        },
        outlined: {
          borderColor: 'rgba(255,255,255,0.2)',
          color: 'rgba(255,255,255,0.85)',
          '&:hover': {
            borderColor: 'rgba(255,255,255,0.5)',
            backgroundColor: 'rgba(255,255,255,0.05)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          backgroundColor: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: 'rgba(255,255,255,0.7)',
          fontSize: '0.8rem',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255,255,255,0.06)',
        },
      },
    },
  },
})
