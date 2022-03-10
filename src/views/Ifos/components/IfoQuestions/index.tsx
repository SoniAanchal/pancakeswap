import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Card, CardHeader, CardBody, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import FoldableText from 'components/FoldableSection/FoldableText'
import config from './config'

const ImageWrapper = styled.div`
  flex: none;
  order: 2;
  max-width: 414px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    order: 1;
  }
`

const DetailsWrapper = styled.div`
  order: 1;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    order: 2;
    margin-bottom: 0;
    margin-left: 40px;
  }
`

const IfoQuestions = () => {
  const { t } = useTranslation()

  return (
    <Flex  alignItems={['center', null, null, 'start']} flexDirection={['column', null, null, 'row']}>
      <ImageWrapper>
        <img src="/images/ifos/ifo-bunny.png" alt="ifo bunny" width="414px" height="500px" />
      </ImageWrapper>
      <DetailsWrapper>
        <Card style= {{background: 'linear-gradient(139.73deg,#000033 0%,#008080 60%,#000033 100%)'}}>
          <CardHeader style= {{background: 'linear-gradient(180deg, #00ffff 0%, #8080ff 100%)'}}>
            <Heading scale="lg" color="black">
              {t('Details')}
            </Heading>
          </CardHeader>
          <CardBody style= {{background: 'linear-gradient(139.73deg, rgb(153, 153, 153) 0%, rgb(255, 255, 204) 60%, rgb(153, 153, 153) 100%)'}}>
            {config(t).map(({ title, description }, i, { length }) => (
              <FoldableText key={title} id={title} mb={i + 1 === length ? '' : '24px'} title={title}>
                {description.map((desc) => {
                  return (
                    <Text key={desc} color="black" as="p">
                      {desc}
                    </Text>
                  )
                })}
              </FoldableText>
            ))}
          </CardBody>
        </Card>
      </DetailsWrapper>
    </Flex>
  )
}

export default IfoQuestions
