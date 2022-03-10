import React from 'react'
import styled from 'styled-components'
import { Box, Button, Heading, Flex } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import PageHeader from 'components/PageHeader'
import SectionsWithFoldableText from 'components/FoldableSection/SectionsWithFoldableText'
import PageSection from 'components/PageSection'
import { PageMeta } from 'components/Layout/Page'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import useTheme from 'hooks/useTheme'
import SearchBar from '../components/SearchBar'
import Collections from './Collections'
import Newest from './Newest'
import config from './config'

const Gradient = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.cardHeader};
`

const StyledPageHeader = styled(PageHeader)`
  margin-bottom: 0px;
  padding-bottom: 0px;
`

const StyledHeaderInner = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & div:nth-child(1) {
    order: 1;
  }
  & div:nth-child(2) {
    order: 0;
    margin-bottom: 32px;
    align-self: end;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
    & div:nth-child(1) {
      order: 0;
    }
    & div:nth-child(2) {
      order: 1;
      margin-bottom: 32px;
      align-self: auto;
    }
  }
`

const Home = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <PageMeta/>
      <StyledPageHeader style={{background:'linear-gradient(139.73deg, rgb(0, 0, 51) 0%, rgb(0, 128, 128) 60%, rgb(0, 0, 51) 100%)'}}>
        <StyledHeaderInner >
          <div>
            <Heading as="h1" scale="xxl" color="#ffcc00" mb="32px">
              {t('NFT Market')}
            </Heading>
            <Heading scale="lg" color="black">
              {t('Buy and Sell NFTs on Binance Smart Chain')}
            </Heading>
            {account && (
              <Button as={Link} to={`${nftsBaseUrl}/profile/${account.toLowerCase()}`} mt="32px">
                {t('Manage/Sell')}
              </Button>
            )}
          </div>
          <SearchBar />
        </StyledHeaderInner>
      </StyledPageHeader>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={theme.colors.background}
        style={{background : 'radial-gradient(329.58% 50% at 50% 50%,#ffffff 0%,#008080 100%)'}}
        index={1}
        concaveDivider
        dividerPosition="top"
      >
        <Collections />
        <Newest />
      </PageSection>
      <Gradient p="64px 0" style={{background:'linear-gradient(139.73deg,#000033 0%,#008080 60%,#000033 100%)'}}>
        <SectionsWithFoldableText header={t('FAQs')}  config={config(t)} m="auto" />
      </Gradient>
    </>
  )
}

export default Home
