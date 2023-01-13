import { Box, Text } from "@chakra-ui/react"

export default function Twitter() {
  return (
    <Box 
      as='section'
      py="16"
      >
      <Text pb="5" fontSize="3xl" fontWeight="bold">Twitter</Text>
      <a className="twitter-timeline" data-lang="ja" data-height="800" data-theme="light" href="https://twitter.com/sunrise_web_dev?ref_src=twsrc%5Etfw">Tweets by sunrise_web_dev</a> 
    </Box>
  )
}