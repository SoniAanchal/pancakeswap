import React from 'react'
import styled from 'styled-components'
import { Card, CardHeader, Box, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import PrizesGrid from './PrizesGrid'

const StyledCard = styled(Card)`
  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 40px;
    flex: 1;
  }
`

const PrizesCard = () => {
  const { t } = useTranslation()

  return (
    <StyledCard style={{background:'linear-gradient(180deg,#d9d9d9 0%, #c2d6d6 100%)'}}>
      <CardHeader style={{background:'linear-gradient(180deg,#d9d9d9 0%, #c2d6d6 100%)'}}>
        <Heading scale="lg" color="#009900">
          {t('Prizes by Team')}
        </Heading>
        <Text color="#009900" fontSize="14px">
          {t('Higher trading volume = higher rank!')}
        </Text>
      </CardHeader>
      <PrizesGrid />
      <Box p="24px" style={{background:'linear-gradient(180deg,#d9d9d9 0%, #c2d6d6 100%)'}}>
        <Text color="#009900" fontSize="14px">
          {t(
            'Prizes to be distributed in CAKE, LAZIO, PORTO and SANTOS in a distribution of 3:1:1:1 and shared by all members of each respective tier.',
          )}{' '}
          {t(
            'The price of token prizes (CAKE, LAZIO, PORTO and SANTOS) in USD will be determined as per their BUSD pair price during the tally period.',
          )}
        </Text>
      </Box>
    </StyledCard>
  )
}

export default PrizesCard
