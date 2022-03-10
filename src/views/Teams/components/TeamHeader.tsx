import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap/uikit'
import { useProfile } from 'state/profile/hooks'
import { useTranslation } from 'contexts/Localization'
import NoProfileCard from './NoProfileCard'

const HeaderWrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary };
  margin-bottom: 24px;
  padding-bottom: 24px;
`

const TeamHeader = () => {
  const { t } = useTranslation()
  const { isInitialized, profile } = useProfile()
  const showProfileCallout = isInitialized && !profile

  return (
    <>
      {showProfileCallout && <NoProfileCard />}
      <HeaderWrapper style={{background:"linear-gradient(139.73deg,#000033 0%,#008080 60%,#000033 100%)"}}>
        <Heading as="h5" scale="xxl" color="#ffffff">
          {t('Teams & Profiles')}
        </Heading>
        <Text bold color="#ffffff">
          {t('Show off your stats and collectibles with your unique profile. Team features will be revealed soon!')}
        </Text>
      </HeaderWrapper>
    </>
  )
}

export default TeamHeader
