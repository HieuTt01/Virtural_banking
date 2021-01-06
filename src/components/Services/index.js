import React from 'react'
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesH2,
    ServicesP, 
    ServicesWrapper, 
    ServicesCard,
    ServicesIcon
    } from './ServicesElements'
import Icon1 from '../../images/services_discount.svg';
import Icon2 from '../../images/services_online.svg';
import Icon3 from '../../images/services_benefit.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Reduce expenses</ServicesH2>
                    <ServicesP> We help reduce your fess and increase your overall revenue</ServicesP>
                </ServicesCard>\
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2> Virtural Offices</ServicesH2>
                    <ServicesP> You can access our platform online anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2> Premium Benefits</ServicesH2>
                    <ServicesP> Unlock our special membership card that return 5% cash back</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
