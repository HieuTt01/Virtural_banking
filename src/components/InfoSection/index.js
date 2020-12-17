import React from 'react'
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow,
     Column1, 
     Subtitle,
     Heading, 
     TextWrapper, 
     TopLine, BtnWrap, Column2, ImgWrap, Img 
    } from './InfoElements'
import { Button } from '../ButtonElements'


const InfoSection = ({
    lightBg, 
    id, 
    imgStart,
    topLine, 
    lightText, 
    headLine, 
    darkText, 
    descripion, 
    buttonLabel, 
    img, alt
}) => {
  
    return (
        <>
         <InfoContainer lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                         <TextWrapper>
                             <TopLine>{topLine}</TopLine>
                             <Heading lightText={lightText}>{headLine}</Heading>
                             <Subtitle darkText={darkText}>{descripion}</Subtitle>
                             <BtnWrap>
                                 <Button to="home" >{buttonLabel} </Button>
                             </BtnWrap>
                         </TextWrapper>
                     </Column1>
                     <Column2>
                         <ImgWrap>
                             <Img src={img} alt={alt}/> 
                         </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>   
        </>
    )
}

export default InfoSection
