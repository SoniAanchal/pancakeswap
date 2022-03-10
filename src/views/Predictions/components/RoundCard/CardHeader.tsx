import React, { ReactElement } from 'react'
import { Flex, Text } from '@pancakeswap/uikit'
import styled, { DefaultTheme } from 'styled-components'

type Status = 'expired' | 'live' | 'next' | 'soon' | 'canceled' | 'calculating'

interface CardHeaderProps {
  status: Status
  title: string
  epoch: number
  icon?: ReactElement
}

const HEADER_HEIGHT = '37px'

// Used to get the gradient for the card border, which depends on the header color to create the illusion
// that header is overlapping the 1px card border.
// 'live' is not included into the switch case because it has isActive border style
export const getBorderBackground = (theme: DefaultTheme, status: Status) => {
  const gradientStopPoint = `calc(${HEADER_HEIGHT} + 1px)`
  switch (status) {
    case 'calculating':
      return `linear-gradient('#ffcc00' ${gradientStopPoint}, ${theme.colors.cardBorder} ${gradientStopPoint}), ${theme.colors.gradients.cardHeader}`
    case 'canceled':
      return `linear-gradient(${theme.colors.warning} ${gradientStopPoint}, ${"#5c8a8a"} ${gradientStopPoint})`
    case 'next':
      return `linear-gradient(${theme.colors.primary} ${gradientStopPoint}, ${"#5c8a8a"} ${gradientStopPoint})`
    case 'expired':
    case 'soon':
    default:
      return "#5c8a8a"
  }
}

const getBackgroundColor = (theme: DefaultTheme, status: Status) => {
  switch (status) {
    case 'calculating':
      return "#990033"
    case 'live':
      return '#ffcc00'
    case 'canceled':
      return theme.colors.warning
    case 'next':
      return "#007aff"
    case 'expired':
    case 'soon':
    default:
      return "#b3cccc"
  }
}

type TextColor = '#669999' | '#ffcc00' | '#007aff' | '#009999' | ' #ff9900'
type FallbackColor = '#009999' | ' #ff9900'

const getTextColorByStatus = (status: Status, fallback: FallbackColor): TextColor => {
  switch (status) {
    case 'expired':
      return '#669999'
    case 'next':
      return '#ffcc00'
    case 'live':
      return '#007aff'
    case 'canceled':
    case 'calculating':
      return '#009999'
    default:
      return fallback
  }
}

const StyledCardHeader = styled.div<{ status: Status }>`
  align-items: center;
  background: ${({ theme, status }) => getBackgroundColor(theme, status)};
  display: flex;
  justify-content: space-between;
  height: ${HEADER_HEIGHT};
  padding: ${({ status }) => (status === 'live' ? '16px' : '8px')};
`

const Round = styled.div`
  justify-self: center;
`

const CardHeader: React.FC<CardHeaderProps> = ({ status, title, epoch, icon }) => {
  const textColor = getTextColorByStatus(status, '#009999')
  const isLive = status === 'live'

  return (
    <StyledCardHeader status={status}>
      <Flex alignItems="center">
        {icon}
        <Text color={textColor} bold={isLive} textTransform={isLive ? 'uppercase' : 'capitalize'} lineHeight="21px">
          {title}
        </Text>
      </Flex>
      <Round>
        <Text fontSize={isLive ? '14px' : '12px'} color={getTextColorByStatus(status, ' #ff9900')} textAlign="center">
          {`#${epoch}`}
        </Text>
      </Round>
    </StyledCardHeader>
  )
}

export default CardHeader
