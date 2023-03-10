import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Skeleton,
  useTheme,
} from '@mui/material'

import Card from '@/components/Card'

// import { getThreadList } from '@/apis/common'

type TopProps = {
  children: React.ReactElement
}
const Top = ({ children }: TopProps) => {
  const [isTopOpen, setTopOpen] = useState(true) //置顶收缩
  const theme = useTheme()
  const handleClick = () => {
    setTopOpen(!isTopOpen)
  }
  return (
    <>
      <ListItemButton
        // disableGutters
        onClick={handleClick}
      >
        <ListItemText>置顶主题</ListItemText>
        {isTopOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider
        className="border-b-4 rounded-lg"
        style={{ borderBottomColor: theme.palette.primary.main }}
      />
      <Collapse in={isTopOpen} timeout="auto" unmountOnExit>
        <Skeleton></Skeleton>
      </Collapse>
    </>
  )
}

type NormalProps = {
  sortBy: string
  handleSortChange: any
  children: React.ReactElement
}
const Normal = ({ sortBy, handleSortChange, children }: NormalProps) => {
  const theme = useTheme()
  return (
    <>
      <ListItem>
        <ListItemText>普通主题</ListItemText>
        <Select
          variant="standard"
          disableUnderline
          value={sortBy}
          onChange={handleSortChange}
        >
          <MenuItem value="1">最新发表</MenuItem>
          <MenuItem value="2">最新回复</MenuItem>
          <MenuItem value="3">精华展示</MenuItem>
        </Select>
      </ListItem>
      <Divider
        className="border-b-4 rounded-lg"
        style={{ borderBottomColor: theme.palette.primary.main }}
      />
      {children}
    </>
  )
}

function Forum() {
  const [sortBy, setSort] = useState('1') // thread sort rule
  const routeParam = useParams()
  const params = new URLSearchParams(window.location.search)
  // const [page, setPage] = useState(parseInt(params.get('page') || 1))
  const pageSize = 10

  // const {data: threadList, isLoading} = useQuery(['getThread', () => getThreadList({forum_id: routeParam.fid})])
  // const handlePageChange =

  const handleSortChange = (event: SelectChangeEvent) => {
    setSort(event.target.value)
  }

  return (
    <Box className="flex-1">
      <Pagination size="small" count={10} variant="outlined" shape="rounded" />
      <Card>
        <>
          <Top>
            <List>
              {/* {data.data.map((item) => (
              <Post data={item} key={item.id} />
            ))} */}
            </List>
          </Top>
          <Normal sortBy={sortBy} handleSortChange={handleSortChange}>
            <List>
              {/* {data.data.map((item) => (
              <Post data={item} key={item.id} />
            ))} */}
            </List>
          </Normal>
        </>
      </Card>
      <Pagination
        size="small"
        // page={page}
        // onChange={handlePageChange}
        count={10}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  )
}
export default Forum
