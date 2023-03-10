import { Button, Stack } from '@mui/material'

type FooterProps = {
  floor: number
}

const Footer = ({ floor }: FooterProps) => {
  const handleReplyClick = () => {
    console.log(floor)
    window.location.hash = 'vditor'
  }
  return (
    <Stack direction="row" className="justify-end">
      <Button variant="text" className="mr-2">
        ζΆθ
      </Button>
      <Button variant="text" onClick={handleReplyClick}>
        εε€
      </Button>
    </Stack>
  )
}

export default Footer
