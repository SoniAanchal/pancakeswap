import React from 'react'
import { Text, Heading, Card, CardHeader, CardBody, Box, BoxProps } from '@pancakeswap/uikit'
import FoldableText from './FoldableText'

interface Props extends BoxProps {
  header: string
  config: { title: string; description: string[] }[]
}

const SectionsWithFoldableText: React.FC<Props> = ({ header, config, ...props }) => {
  return (
    <Box maxWidth="888px" {...props} >
      <Card style={{background:'linear-gradient(rgb(255, 216, 0) 0%, rgb(253, 171, 50) 100%)'}}>
        <CardHeader style={{background:'linear-gradient(rgb(255, 216, 0) 0%, rgb(253, 171, 50) 100%)'}}>
          <Heading scale="lg" color="rgb(0, 128, 128)">
            {header}
          </Heading>
        </CardHeader>
        <CardBody style={{background: "linear-gradient(139.73deg, rgb(153, 153, 153) 0%, rgb(255, 255, 204) 60%, rgb(153, 153, 153) 100%)"}}> 
          {config.map(({ title, description }, i, { length }) => (
            <FoldableText key={title} id={title} mb={i + 1 === length ? '' : '24px'}  title={title}>
              {description.map((desc) => {
                return (
                  <Text key={desc} color="#000000" as="p">
                    {desc}
                  </Text>
                )
              })}
            </FoldableText>
          ))}
        </CardBody>
      </Card>
    </Box>
  )
}

export default SectionsWithFoldableText
