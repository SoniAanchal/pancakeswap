import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Text, Skeleton, Button, ArrowForwardIcon, Heading } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import { useSlowFresh } from 'hooks/useRefresh'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { getTotalWon } from 'state/predictions/helpers'
import { useBNBBusdPrice } from 'hooks/useBUSDPrice'
import { multiplyPriceByAmount } from 'utils/prices'

const StyledLink = styled(Link)`
  width: 100%;
` 

const PredictionCardContent = () => {
  const { t } = useTranslation()
  const slowRefresh = useSlowFresh()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  const bnbBusdPrice = useBNBBusdPrice()
  const [bnbWon, setBnbWon] = useState(0)
  const bnbWonInUsd = multiplyPriceByAmount(bnbBusdPrice, bnbWon)

  const localisedBnbUsdString = formatLocalisedCompactNumber(bnbWonInUsd)
  const bnbWonText = t('$%bnbWonInUsd% in BNB won so far', { bnbWonInUsd: localisedBnbUsdString })
  const [pretext, wonSoFar] = bnbWonText.split(localisedBnbUsdString)

  useEffect(() => {
    if (isIntersecting) {
      setLoadData(true)
    }
  }, [isIntersecting])

  useEffect(() => {
    const fetchMarketData = async () => {
      const totalWon = await getTotalWon()
      setBnbWon(totalWon)
    }

    if (loadData) {
      fetchMarketData()
    }
  }, [slowRefresh, loadData])

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text color="#000033" bold fontSize="16px">
          {t('Prediction')}
        </Text>
        {bnbWonInUsd ? (
          <Heading color="#000000" my="8px" scale="xl" bold>
            {pretext}
            {localisedBnbUsdString}
          </Heading>
        ) : (
          <>
            <Skeleton width={230} height={40} my="8px" />
            <div ref={observerRef} />
          </>
        )}
        <Text color="#000033" mb="24px" bold fontSize="16px">
          {wonSoFar}
        </Text>
        <Text color="#000033" mb="40px">
          {t('Will BNB price rise or fall? guess correctly to win!')}
        </Text>
      </Flex>
      <Flex alignItems="centre" justifyContent="centre">
        <StyledLink to="/prediction" id="homepage-prediction-cta">
          <Button width="50%">
            <Text bold color="#000033">
              {t('Play')}
            </Text>
            <ArrowForwardIcon ml="4px" color="#000033" />
          </Button>
        </StyledLink>
      </Flex>
    </>
  )
}

export default PredictionCardContent
