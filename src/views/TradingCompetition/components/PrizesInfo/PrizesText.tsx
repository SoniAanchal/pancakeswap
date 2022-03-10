import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Heading, Image } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import FlipperBunny from '../../pngs/flippers.png'

const StyledFlex = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 1;
  }
`

const ImageWrapper = styled.div`
  width: 200px;
  margin: 40px auto 0;
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`

const PrizesText = () => {
  const { t } = useTranslation()

  return (
    <StyledFlex flexDirection="column" mb="32px">
      <Text mb="24px" color="#009900">{t('Every eligible participant will win prizes at the end of the competition.')}</Text>
      <Heading color="#009900" mb="24px" scale="lg">
        {t('The better your team performs, the better prizes you will get!')}
      </Heading>
      <Text color="#009900">
        {t(
          'The final winning team will be the team with the highest total volume score at the end of the competition period.',
        )}
      </Text>
      <ImageWrapper>
        <Image src={FlipperBunny} alt="Flipper bunny" color="linear-gradient(180deg, #00004d 0%, #000033 100%)" width={499} height={400} />
      </ImageWrapper>
    </StyledFlex>
  )
}

export default PrizesText
