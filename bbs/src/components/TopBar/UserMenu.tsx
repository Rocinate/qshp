import {
  DarkMode,
  LightMode,
  Logout,
  TransferWithinAStation,
} from '@mui/icons-material'
import { Box, Divider, ListItemIcon, MenuItem } from '@mui/material'

import Tooltip from '@/components/Tooltip'
import { Theme, useAppState } from '@/states'

import Avatar from '../Avatar'

const MenuContent = () => {
  const { state, dispatch } = useAppState()

  const logout = () => {
    dispatch({
      type: 'clear',
    })
  }

  const themeChange = () => {
    if (state.theme === 'light') {
      dispatch({
        type: 'set theme',
        payload: 'dark' as Theme,
      })
    } else {
      dispatch({
        type: 'set theme',
        payload: 'light' as Theme,
      })
    }
  }
  return (
    <Box className="py-2">
      <MenuItem onClick={themeChange}>
        <ListItemIcon>
          {state.theme === 'light' ? (
            <DarkMode fontSize="small" />
          ) : (
            <LightMode fontSize="small" />
          )}
        </ListItemIcon>
        {state.theme === 'light' ? '暗黑' : 'light'}模式
      </MenuItem>
      <Divider variant="middle" flexItem></Divider>
      <MenuItem>
        <ListItemIcon>
          <TransferWithinAStation fontSize="small" />
        </ListItemIcon>
        切换账号
      </MenuItem>
      <Divider variant="middle" flexItem></Divider>
      <MenuItem onClick={logout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        登出
      </MenuItem>
    </Box>
  )
}

const UserMenu = () => {
  return (
    <>
      <Tooltip title={<MenuContent />}>
        <Avatar
          className="mx-3"
          uid={0}
          sx={{ width: 32, height: 32 }}
          variant="rounded"
        />
      </Tooltip>
    </>
  )
}

export default UserMenu
