import styled from 'styled-components'
import { device } from 'utils/media-breakpoints'
import MediaWrapper from 'components/elements/MediaWrapper'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin-bottom: 0px;
    
    @media ${device.tablet} {
        margin-bottom: 20px;
    }
`

const StyledImageWrapper = styled.div`
    width: 100%;
    max-width: 640px;

    margin: 20px 0;
`

const StyledHeader = styled.h3`
    margin-top: 30px;

    @media ${device.tablet} {
        margin-top: 40px;
    }
`

export default function MediaGallery(props) {
    return (
        <>
            <StyledHeader>{'Gallery'}</StyledHeader>
            <StyledContainer>
                {props.media.map( media => {
                    return (
                        <StyledImageWrapper key={media.id}>
                            <MediaWrapper media={media}/>
                        </StyledImageWrapper>
                    )
                })}
            </StyledContainer>
        </>
    )
}