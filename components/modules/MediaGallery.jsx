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
    max-width: 720px;
    margin-top: 30px;
    margin-bottom: 0px;
    
    @media ${device.tablet} {
        margin-top: 40px;
        margin-bottom: 20px;
    }
`

const StyledImageWrapper = styled.div`
    width: 100%;
    max-width: 640px;
    margin: 20px 0;
`

const StyledHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    margin: 60px 0 40px;
    padding: 20px;
    background-color: ${props => props.theme.paleLavender};
    border-radius: 6px;
`

const StyledHeader = styled.h3`
    color: ${props => props.theme.violet};
    margin: 0;
`

export default function MediaGallery(props) {
    return (
        <StyledContainer>
            <StyledHeaderWrapper>
                <StyledHeader>{'More Project Media'}</StyledHeader>
            </StyledHeaderWrapper>
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