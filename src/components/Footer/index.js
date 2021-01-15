import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink
}
    from "./FooterElements"

import {
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights
} from "./FooterElements"

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter
} from 'react-icons/fa'

import {animateScroll as scroll} from "react-scroll"
const Footer = () => {

    const toggleHome= () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>About Us</FooterLinksTitle>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Testimonials </FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors </FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinksTitle>Contact Us</FooterLinksTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Testimonials </FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations </FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinksTitle>Video</FooterLinksTitle>
                            <FooterLink to="/">Submit Video</FooterLink>
                            <FooterLink to="/">Ambassadirs</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer </FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinksTitle>Social Media</FooterLinksTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook </FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/"> Twitter </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Dolla
                        </SocialLogo>
                        <WebsiteRights>Dolla © 2 0 2 0</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
