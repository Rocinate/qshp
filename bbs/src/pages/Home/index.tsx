import { Box, Typography, List, Stack, Divider } from '@mui/material'
import React from 'react'

import { useQuery } from 'react-query'
import { Whatshot } from '@mui/icons-material'

import moment from 'moment'
import { Link } from 'react-router-dom'

import { ForumGroup } from './ForumCover'
import { useAppState } from '@/states'
import { getHotThread, getBBSInfo } from '@/apis/common'
import Post from '@/components/Post'

import SvgIcon from '@mui/material/SvgIcon'
type SvgIconComponent = typeof SvgIcon
type BoxHeaderProps = {
  text: string
  Icon: SvgIconComponent
}
const BoxHeader = ({ text, Icon }: BoxHeaderProps) => {
  return (
    <Box>
      <Stack direction="row" className="p-3">
        <Icon sx={{ mr: 2 }} />
        <Typography>{text}</Typography>
      </Stack>
      <Divider />
    </Box>
  )
}

const Home = () => {
  const { state } = useAppState()
  const { data: hot, isLoading } = useQuery(['hotThread'], () =>
    getHotThread({ forum_id: 0 })
  )

  const { data: info, isLoading: infoLoading } = useQuery(['bbsInfo'], () =>
    getBBSInfo()
  )

  return (
    <Box className="flex">
      <Box className="flex-1">
        <List>
          {state.navList.map((item) => (
            <ForumGroup data={item} key={item.name} />
          ))}
        </List>
      </Box>
      <Box className="hidden lg:block w-60 ml-6 ">
        <Box className="rounded-lg drop-shadow-md mb-6">
          <BoxHeader text="论坛统计" Icon={Whatshot} />
          <Box className="p-3">
            <Typography>
              今日：{infoLoading ? <></> : info?.todayposts}
            </Typography>
            <Typography>
              昨日：{infoLoading ? <></> : info?.yesterdayposts}
            </Typography>
          </Box>
        </Box>
        <Box className="rounded-lg drop-shadow-md">
          <BoxHeader text="热门分类" Icon={Whatshot} />
          <Box className="p-3">
            {infoLoading ? (
              <Typography>None</Typography>
            ) : (
              info?.forums?.map((item) => (
                <Typography key={item.name}>
                  <Link to={`/forum/${item.fid}`}>{item.name}</Link>
                </Typography>
              ))
            )}
          </Box>
        </Box>
        <Box className="rounded-lg drop-shadow-md mb-6">
          <BoxHeader text="今日热门" Icon={Whatshot} />
          <List>
            {isLoading ? (
              <Typography>none</Typography>
            ) : (
              // hot.threads.length
              hot?.threads?.map((item) => (
                <Post small data={item} key={item.tid} className="mb-4" />
              ))
            )}
          </List>
        </Box>
      </Box>
    </Box>
  )
}
export default Home