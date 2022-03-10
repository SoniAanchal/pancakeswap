import React, { useState, useEffect } from 'react'
import { Heading, Flex, Button, Grid, ChevronRightIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { Link } from 'react-router-dom'
import { NftToken } from 'state/nftMarket/types'
import { getLatestListedNfts, getNftsFromDifferentCollectionsApi } from 'state/nftMarket/helpers'
import { nftsBaseUrl, pancakeBunniesAddress } from 'views/Nft/market/constants'
import { CollectibleLinkCard } from '../components/CollectibleCard'
import GridPlaceholder from '../components/GridPlaceholder'

/**
 * Fetch latest NFTs data from SG+API and combine them
 * @returns Array of NftToken
 */
const useNewestNfts = () => {
  const [newestNfts, setNewestNfts] = useState<NftToken[]>(null)

  useEffect(() => {
    const fetchNewestNfts = async () => {
      const nftsFromSg = await getLatestListedNfts(16)
      const nftsFromApi = await getNftsFromDifferentCollectionsApi(
        nftsFromSg.map((nft) => ({ collectionAddress: nft.collection.id, tokenId: nft.tokenId })),
      )

      const nfts = nftsFromSg
        .map((nftFromSg) => {
          const foundNftFromApi = nftsFromApi.find((nftFromApi) => nftFromApi.tokenId === nftFromSg.tokenId)
          if (foundNftFromApi) {
            return { ...foundNftFromApi, marketData: nftFromSg }
          }
          return null
        })
        .filter(Boolean)
      setNewestNfts(nfts)
    }
    fetchNewestNfts()
  }, [])

  return newestNfts
}

const Newest: React.FC = () => {
  const { t } = useTranslation()
  const nfts = useNewestNfts()

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center" mb="24px">
        <Heading as="h2" scale="lg" color="blue">{t('Newest Arrivals')}</Heading>
        <Button
          as={Link}
          to={`${nftsBaseUrl}/activity/`}
          variant="primary" 
          style= {{background: 'linear-gradient(180deg,#FFD800 0%,#FDAB32 100%)'}}
          scale="sm"
          endIcon={<ChevronRightIcon color="cyan" width="28px" />}
        >
          {t('View All')}
        </Button>
      </Flex>
      {nfts ? (
        <Grid
          gridRowGap="24px"
          gridColumnGap="16px"
          gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
        >
          {nfts.map((nft) => {
            const isPBCollection = nft.collectionAddress.toLowerCase() === pancakeBunniesAddress.toLowerCase()
            const currentAskPrice =
              !isPBCollection && nft.marketData?.isTradable ? parseFloat(nft.marketData.currentAskPrice) : undefined
            return (
              <CollectibleLinkCard
                key={nft.collectionAddress + nft.tokenId}
                nft={nft}
                currentAskPrice={currentAskPrice }
              />
            )
          })}
        </Grid>
      ) : (
        <GridPlaceholder numItems={8} />
      )}
    </div>
  )
}

export default Newest
