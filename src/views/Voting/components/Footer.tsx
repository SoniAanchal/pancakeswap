import React from 'react'
import { Box, Button, Text, Heading, ProposalIcon, Flex } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import DesktopImage from './DesktopImage'

const StyledFooter = styled(Box)`
  background: linear-gradient ( 180deg, #004d66 0%, #0099ff 100%);
  padding-bottom: 32px;
  padding-top: 32px;
`

const Footer = () => {
  const { t } = useTranslation()

  return (
    <StyledFooter  style={{background:"#090909"}} >
      <Container >
        <Flex alignItems="center" justifyContent="row-reversed">
          <Box pr="32px">
            <Heading as="h2" scale="lg" mb="16px" color="#ffffff">
              {t('Got a suggestion?')}
            </Heading>
            <Text as="p" color='white'>
              {t('Community proposals are a great way to see how the community feels about your ideas.')}
            </Text>
            <Text as="p" mb="16px" color="#ffffff">
              {t(
                "They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.",
              )}
            </Text>

            <Button
              startIcon={<ProposalIcon color="#ffffff" width="24px" />}
              as={Link}
              to="/voting/proposal/create"
              style={{background:"linear-gradient(180deg,#FFD800 0%,#FDAB32 100%"}}
            >
              {t('Make a Proposal')}
            </Button>
          </Box>
          <DesktopImage src="/images/voting/voting-bunny.png" width={373} height={284} />
        </Flex>
      </Container>
    </StyledFooter>
  )
}

export default Footer
