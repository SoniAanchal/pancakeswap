import React from 'react'
import { Price } from '@pancakeswap/sdk'
import { Flex, Text } from '@pancakeswap/uikit'
import { multiplyPriceByAmount } from 'utils/prices'
import { useTranslation } from 'contexts/Localization'
import { formatBnb } from '../helpers'

type SummaryType = 'won' | 'lost' | 'entered'

interface SummaryRowProps {
  type: SummaryType
  summary: any
  bnbBusdPrice: Price
}

const summaryTypeColors = {
  won: '#00b300',
  lost: '#cc0000',
  entered: 'text',
}

const summaryTypeSigns = {
  won: '+',
  lost: '-',
  entered: '',
}

const SummaryRow: React.FC<SummaryRowProps> = ({ type, summary, bnbBusdPrice }) => {
  const { t } = useTranslation()

  const color = summaryTypeColors[type]
  const { rounds, amount } = summary[type]
  const totalRounds = summary.entered.rounds
  const roundsInPercents = ((rounds * 100) / totalRounds).toFixed(2)
  const typeTranslationKey = type.charAt(0).toUpperCase() + type.slice(1)
  const displayAmount = type === 'won' ? summary[type].payout : amount
  const amountInUsd = multiplyPriceByAmount(bnbBusdPrice, displayAmount)

  return (
    <>
      <Text mt="16px" bold color="#0099ff">
        {t(typeTranslationKey)}
      </Text>
      <Flex>
        <Flex flex="2" flexDirection="column">
          <Text bold fontSize="20px" color={color}>
            {rounds} {t('Rounds').toLocaleLowerCase()}
          </Text>
          <Text fontSize="12px" color="#0099ff">
            {type === 'entered' ? t('Total').toLocaleLowerCase() : `${roundsInPercents}%`}
          </Text>
        </Flex>
        <Flex flex="3" flexDirection="column">
          <Text bold fontSize="20px" color={color}>
            {`${summaryTypeSigns[type]}${formatBnb(displayAmount)} BNB`}
          </Text>
          <Text fontSize="12px" color="#0099ff">
            {`~$${amountInUsd.toFixed(2)}`}
          </Text>
        </Flex>
      </Flex>
    </>
  )
}

export default SummaryRow
