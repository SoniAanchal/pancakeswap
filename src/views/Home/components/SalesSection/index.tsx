import React from 'react'
import { Flex, Text, Button, Link } from '@pancakeswap/uikit'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  images: CompositeImageProps
}

const SalesSection: React.FC<SalesSectionProps> = (props) => {
  const { t } = useTranslation()

  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

  const headingTranslatedText = t(headingText)
  const bodyTranslatedText = t(bodyText)

  return ( 
    <Flex flexDirection="column" style={{background:'linear-gradient(139.73deg, rgb(255, 230, 238) 0%, rgb(153, 204, 255) 60%, rgb(255, 230, 238) 100%)'}}>
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row' : 'row-reverse']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <ColoredWordHeading text={headingTranslatedText} color= "#3399ff"/>
          <Text color="#001a33" mb="24px">
            {bodyTranslatedText}
          </Text>
          <Flex>
            <Button mr="16px" style={{background:'linear-gradient(180deg,#FFD800 0%,#FDAB32 100%)'}}>
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text color="#33001a" bold fontSize="16px">
                    {t(primaryButton.text)}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="#001a33" bold fontSize="16px">
                    {t(primaryButton.text)}
                  </Text>
                </RouterLink>
              )}
            </Button>
            {secondaryButton.external ? (
              <Link external href={secondaryButton.to}>
                {t(secondaryButton.text)}
              </Link>
            ) : (
              <RouterLink to={secondaryButton.to} >{t(secondaryButton.text) }</RouterLink>
            )}
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
        >
          <CompositeImage {...images} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SalesSection
