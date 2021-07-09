import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'utils/animations'
import Icon from 'components/elements/Icon'
import StyledParagraph from './StyledParagraph'


const partialFadeIn = keyframes`
    from { opacity: 0; } to { opacity: 0.9; }
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
background: ${props => props.theme[props.categoryID.toString()]};
animation: ${partialFadeIn} .2s 1;
opacity: 0.9;
`

const StyledCardHeader = styled.h3`
position: absolute;
top: 0;
margin: 20px;
color: blue;
animation: ${fadeIn} .2s 1;
`

const StyledText = styled.p`
position: absolute;
bottom: 0;
margin: 20px;
font-size: 1.1em;
font-weight: 500;
color: blue;
animation: ${fadeIn} .2s 1;
`

const StyledArrowWrapper = styled.div`
position: absolute;
bottom: 0;
right: 0;
width: 22px;
height: 24px;
margin: 20px;
animation: ${fadeIn} .2s 1;
`

export default function ProjectCardOverlay(props) {
    return (
        <Link href={'/' + props.categorySlug + '/' + props.slug}>
            <StyledHoverOverlay>
                <StyledOverlayBackground categoryID={props.categoryID}/>
                <StyledCardHeader>{props.title}</StyledCardHeader>
                <StyledText>{'See Project'}</StyledText>
                <StyledArrowWrapper><Icon type={'arrowHorizontalShort'}/></StyledArrowWrapper>
            </StyledHoverOverlay>
        </Link>
    )
}