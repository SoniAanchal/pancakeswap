import React from 'react'
import { AutoRenewIcon, Flex, Heading } from '@pancakeswap/uikit'
import orderBy from 'lodash/orderBy'
import { useTeams } from 'state/teams/hooks'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import TeamListCard from './components/TeamListCard'
import TeamHeader from './components/TeamHeader'

const Teams = () => {
  const { t } = useTranslation()
  const { teams, isLoading } = useTeams()
  const teamList = Object.values(teams)
  const topTeams = orderBy(teamList, ['points', 'id', 'name'], ['desc', 'asc', 'asc'])

  return (
    <Page style={{background:"linear-gradient(139.73deg,#000033 0%,#008080 60%,#000033 100%)"}}>
      <TeamHeader/>
      <Flex alignItems="center" justifyContent="space-between" mb="32px">
        <Heading color="#ffffff">{t('Teams')}</Heading>
        {isLoading && <AutoRenewIcon spin />}
      </Flex>
      {topTeams.map((team, index) => (
        <TeamListCard key={team.id} rank={index + 1} team={team} />
      ))}
    </Page>
  )
}

export default Teams
