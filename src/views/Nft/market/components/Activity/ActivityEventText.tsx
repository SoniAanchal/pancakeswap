import React from 'react'
import { Text, TextProps } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { MarketEvent } from '../../../../../state/nftMarket/types'

interface ActivityEventTextProps extends TextProps {
  marketEvent: MarketEvent
}

const ActivityEventText: React.FC<ActivityEventTextProps> = ({ marketEvent, ...props }) => {
  const { t } = useTranslation()

  const events = {
    [MarketEvent.NEW]: {
      text: t('Listed'),
      color: '#008000',
    },
    [MarketEvent.CANCEL]: {
      text: t('Delisted'),
      color: '#008000',
    },
    [MarketEvent.MODIFY]: {
      text: t('Modified'),
      color: '#660033',
    },
    [MarketEvent.BUY]: {
      text: t('Bought'),
      color: '#00ff00',
    },
    [MarketEvent.SELL]: {
      text: t('Sold'),
      color: '#ff0000',
    },
  }

  return (
    <Text {...props} color={events[marketEvent].color}>
      {events[marketEvent].text}
    </Text>
  )
}

export default ActivityEventText
