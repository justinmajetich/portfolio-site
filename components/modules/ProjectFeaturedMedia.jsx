import MediaWrapper from "components/elements/MediaWrapper";
import styled from 'styled-components'

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 640px;

    margin: 40px 0;
`

export default function ProjectFeaturedMedia({ media }) {
    return (
        <StyledWrapper>
            <MediaWrapper media={media}/>
        </StyledWrapper>
    )
}