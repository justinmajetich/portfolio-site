import MediaWrapper from "components/elements/MediaWrapper";
import { device } from 'utils/media-breakpoints'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const StyledContainer = styled.div`
    width: 100%;
    max-width: 640px;
    margin: 40px 0px 10px;

    @media ${device.tablet} {
        margin: 60px 0px 10px;
    }
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