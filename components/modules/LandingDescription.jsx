import styled from 'styled-components'
import { use100vh } from 'react-div-100vh'
import { device } from 'utils/media-breakpoints'
import StyledParagraph from 'components/elements/StyledParagraph'
import LandingScrollDirective from 'components/elements/LandingScrollDirective'


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
    font-size: 1.5em;
    color: ${props => props.theme.darkGray};
    max-width: 560px;
`

export default function LandingIntroduction(props) {

    const vh = use100vh()
    const safeVH = vh ? vh : 720

    return (
        <StyledContainer height={safeVH}>
            <h1>Justin Majetich</h1>
            <StyledLandingDescription>I'm a coder and interdisciplinary artist encouraging play and creating spaces for transformation.</StyledLandingDescription>
            <LandingScrollDirective />
        </StyledContainer>
    )
}