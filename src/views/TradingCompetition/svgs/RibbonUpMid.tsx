import React from 'react'
import { Svg, SvgProps } from '@pancakeswap/uikit'

const RibbonUpMid: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 142 48" {...props}>
      <rect width="142" height="46" fill="#009999" />
      <rect width="142" height="2" fill="#006680" />
    </Svg>
  )
}

export default RibbonUpMid
