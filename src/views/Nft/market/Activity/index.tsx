import React from 'react'
import { Card, Heading } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import ActivityHistory from '../ActivityHistory/ActivityHistory'

const Activity = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader style={{background:'radial-gradient(329.58% 50% at 50% 50%,#ffffff 0%,#008080 100%)'}}>
        <Heading as="h1" scale="xxl" color="#000080">
          {t('Activity')}
        </Heading>
      </PageHeader>
      <Page style={{background:'radial-gradient(329.58% 50% at 50% 50%,#ffffff 0%,#008080 100%)'}}>
        <Card>
          <ActivityHistory />
        </Card>
      </Page>
    </>
  )
}

export default Activity
