import MediaWrapper from "components/elements/MediaWrapper";
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const StyledContainer = styled.div`
    width: 100%;
    max-width: 640px;
    margin: 40px 0;
`

export default function ProjectFeaturedMedia({ media }) {
    return (
        <StyledWrapper>
            <StyledContainer>
                <MediaWrapper media={media}/>
            </StyledContainer>
        </StyledWrapper>
    )
}