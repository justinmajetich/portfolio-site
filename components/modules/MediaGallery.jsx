import styled from 'styled-components'
import MediaWrapper from 'components/elements/MediaWrapper'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 100%;
`

const StyledImageWrapper = styled.div`
    width: 100%;
    max-width: 640px;

    margin: 20px 0;
`

export default function MediaGallery(props) {
    return (
        <StyledContainer>
            {props.media.map( media => {
                return (
                    <StyledImageWrapper key={media.id}>
                        <MediaWrapper media={media}/>
                    </StyledImageWrapper>
                )
            })}
        </StyledContainer>
    )
}