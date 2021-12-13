import styled from 'styled-components'
import Link from 'next/link'
import StyledParagraph from 'components/elements/StyledParagraph'
import { device } from 'utils/media-breakpoints'
import Socials from 'components/modules/Socials'

const StyledContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 350px;
    margin-top: 25px;
    padding: 40px 10% 80px 10%;
    background: ${props => props.theme.gradient};
`

const StyledLinkText = styled.span`
    color:${props => props.theme.violet};
    cursor: pointer;
`

const StyledSocialsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;

    @media ${device.laptop} {
        justify-content: flex-start;
    }
`

const StyledCopyright = styled.p`
    position: absolute;
    bottom: 10px;
    left: 10%;
    font-size: 0.8em;
    color: ${props => props.theme.darkGray};
`

export default function Footer() {
    return (
        <StyledContainer>
            <h2>Let's Talk!</h2>

            <StyledParagraph>
                {'Say hello at '}
                    <Link href={'mailto:justinmajetich@gmail.com'}>
                        <StyledLinkText>{'justinmajetich@gmail.com'}</StyledLinkText>
                    </Link>
                {'.'}
            </StyledParagraph>
            <StyledSocialsWrapper>
                <Socials />
            </StyledSocialsWrapper>
            <StyledCopyright>{'2021 © Justin Majetich'}</StyledCopyright>
        </StyledContainer>
    )
}