import React from 'react'
import styled from 'styled-components'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { Flex, Text, Heading, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import tokens from 'config/constants/tokens'

const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean }>`
  flex-direction: column;
  ${({ noMobileBorder, theme }) =>
    noMobileBorder
      ? `${theme.mediaQueries.md} {
           padding: 0 16px;
           border-left: 1px ${theme.colors.primaryDark} solid;
         }
       `
      : `border-left: 1px ${theme.colors.primaryDark} solid;
         padding: 0 8px;
         ${theme.mediaQueries.sm} {
           padding: 0 16px;
         }
       `}
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(2, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
    grid-template-columns: repeat(4, auto);
  }
`

const emissionsPerBlock = 14.25

const CakeDataRow = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(tokens.cake.address))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const cakePriceBusd = usePriceCakeBusd()
  const mcap = cakePriceBusd.times(cakeSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())

  return (
    <Grid>
      <Flex flexDirection="column" style={{background:'linear-gradient(139.73deg, rgb(255, 230, 238) 0%, rgb(153, 204, 255) 60%, rgb(255, 230, 238) 100%)'}}>
        <Text color="Black">{t('Total supply')}</Text>
        {cakeSupply ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={cakeSupply} color= "#33001a"/>
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </Flex>
      <StyledColumn style={{background:'linear-gradient(139.73deg, rgb(255, 230, 238) 0%, rgb(153, 204, 255) 60%, rgb(255, 230, 238) 100%)'}}>
        <Text color="Black">{t('Burned to date')}</Text>
        {burnedBalance ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={burnedBalance} color= "#33001a" />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledColumn>
      <StyledColumn noMobileBorder style={{background:'linear-gradient(139.73deg, rgb(255, 230, 238) 0%, rgb(153, 204, 255) 60%, rgb(255, 230, 238) 100%)'}}>
        <Text color="black">{t('Market cap')}</Text>
        {mcap?.gt(0) && mcapString ? (
          <Heading scale="lg" color= "#33001a">{t('$%marketCap%', { marketCap: mcapString })} </Heading>
        ) : (
          <Skeleton height={24} width={126} my="4px"/>
        )}
      </StyledColumn>
      <StyledColumn style={{background:'linear-gradient(139.73deg, rgb(255, 230, 238) 0%, rgb(153, 204, 255) 60%, rgb(255, 230, 238) 100%)'}}>
        <Text color="Black">{t('Current emissions')}</Text>

        <Heading scale="lg" color= "#33001a">{t('%cakeEmissions%/block', { cakeEmissions: emissionsPerBlock })} </Heading>
      </StyledColumn>
    </Grid>
  )
}

export default CakeDataRow
