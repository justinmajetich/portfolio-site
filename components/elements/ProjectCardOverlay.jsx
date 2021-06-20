import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from { opacity: 0; } to { opacity: 1; }
`

const partialFadeIn = keyframes`
    from { opacity: 0; } to { opacity: 0.8; }
`

const StyledHoverOverlay = styled.div`
position: absolute;
top: 0;

width: 100%;
height: 100%;
line-height: 1.4;
`

const StyledOverlayBackground = styled.div`
width: 100%;
height: 100%;

background: lightgreen;
animation: ${partialFadeIn} .2s 1;

opacity: 0.8;
`

const StyledCardHeader = styled.h2`
position: absolute;
top: 0;

margin: 20px;

color: white;

animation: ${fadeIn} .2s 1;
`
const StyledDate = styled.p`
position: absolute;
bottom: 0;

margin: 20px;

color: white;

animation: ${fadeIn} .2s 1;
`
const StyledArrow = styled.h2`
position: absolute;
bottom: 0;
right: 0;

margin: 20px;

color: white;

animation: ${fadeIn} .2s 1;
`

export default function ProjectCardOverlay(props) {
    return (
        <Link href={'[sectionID]/' + props.name}>
            <StyledHoverOverlay>
                <StyledOverlayBackground />
                <StyledCardHeader>{props.name}</StyledCardHeader>
                {/* <StyledDate>2021</StyledDate> */}
                <StyledArrow>{'->'}</StyledArrow>
            </StyledHoverOverlay>
        </Link>
    )
}