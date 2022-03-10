import React from 'react'
import { Box, Button, Flex, Heading, ProposalIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import DesktopImage from './DesktopImage'

const StyledHero = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 32px;
  padding-top: 32px;
`

const Hero = () => {
  const { t } = useTranslation()

  return (
    <StyledHero>
      <Container style={{background:"linear-gradient(139.73deg,#000033 0%,#008080 60%,#000033 100%)"}}>
        <Flex alignItems="center" justifyContent="space-between">
          <Box pr="32px">
            <Heading as="h1" scale="xxl" color="#ffffff" mb="0px" >
              {t('Voting')}
            </Heading>
            <Heading as="h3" scale="lg" mb="2px" color="#ffffff" >
              {t('Have your say in the future of the PancakeSwap Ecosystem')}
            </Heading>
            <Button
              style={{background:"linear-gradient(180deg,#FFD800 0%,#FDAB32 100%"}} startIcon={<ProposalIcon color="currentColor" width="24px" />}
              as={Link}
              to="/voting/proposal/create"          
            >
              {
              t('Make a Proposal')}
            </Button>
          </Box>
          <DesktopImage src="/images/voting/voting-presents.png" width={561} height={300} />
        </Flex>
      </Container>
    </StyledHero>
  )
}

export default Hero
