import styled from 'styled-components'
import { use100vh } from 'react-div-100vh'
import { device } from 'utils/media-breakpoints'
import StyledParagraph from 'components/elements/StyledParagraph'
import LandingScrollDirective from 'components/elements/LandingScrollDirective'


const landingDescriptionText = 'I\'m a developer and designer encouraging play and making spaces for transformation.'

const StyledContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: ${props => props.height.toString() + 'px'};

    @media ${device.laptop} {
        height: 100%;
        margin-right: 40px;
    }
`

const StyledLandingDescription = styled(StyledParagraph)`
    font-size: 1.3em;
    color: ${props => props.theme.darkGray};
    max-width: 560px;
`

export default function LandingIntroduction(props) {

    const vh = use100vh()
    const safeVH = vh ? vh : 720

    return (
        <StyledContainer height={safeVH}>
            <h2>Justin Majetich</h2>
            <StyledLandingDescription>{landingDescriptionText}</StyledLandingDescription>
            <LandingScrollDirective />
        </StyledContainer>
    )
}