import React from 'react'
import { Heading, Card, CardBody } from '@pancakeswap/uikit'

const RulesCard: React.FC<{ title?: string }> = ({ title, children }) => {
  return (
    <Card mb="16px" style={{background:'linear-gradient(139.73deg, rgb(255, 230, 238) 0%,  #66ccff 60%, rgb(255, 230, 238) 100%)'}}>
      <CardBody>
        <Heading textAlign="center" color="#ffcc00" mb="16px">
          {title}
        </Heading>
        {children}
      </CardBody>
    </Card>
  )
}

export default RulesCard
