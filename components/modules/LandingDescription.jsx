import styled from 'styled-components'
import { use100vh } from 'react-div-100vh'
import { device } from 'utils/media-breakpoints'
import StyledParagraph from 'components/elements/StyledParagraph'

const StyledContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 270px;
    margin: 0px 0px 80px 0px;

    @media ${device.mobileL} {
        margin: 20px 0px 0px 0px;
    }

    @media ${device.tablet} {
        margin: 20px 0px 60px 0px;
    }

    @media ${device.laptop} {
        height: 400px;
        margin-top: 80px;
    }
`

const StyledHeader = styled.h1`
    font-weight: 600;
    color: ${props => props.theme.violet};
`

const StyledLandingDescription = styled(StyledParagraph)`
    width: 100%;

    @media ${device.tablet} {
        font-size: 1.4em;
        width: 100%;
    }

    @media ${device.laptop} {
        font-size: 2em;
        width: 80%;
    }
`

export default function LandingIntroduction({ content }) {
    const vh = use100vh()
    const safeVH = vh ? vh : 720

    return (
        <StyledContainer height={safeVH}>
            <StyledHeader>{content.header}</StyledHeader>
            <StyledLandingDescription>{content.description}</StyledLandingDescription>
            {/* <LandingScrollDirective /> */}
        </StyledContainer>
    )
}