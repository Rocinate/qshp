import React from 'react'

import { CssBaseline, useMediaQuery } from '@mui/material'
import {
  ThemeProvider as MuiTheme,
  StyledEngineProvider,
} from '@mui/material/styles'

// custom theme
// https://mui.com/material-ui/customization/default-theme
import darkTheme from './Theme/dark'
import lightTheme from './Theme/light'

interface ThemeProps {
  children: React.ReactNode
  theme: string
}

const ThemeProvider = ({ children, theme }: ThemeProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiTheme theme={theme === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MuiTheme>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
