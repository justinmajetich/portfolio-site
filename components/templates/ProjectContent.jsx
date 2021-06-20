import styled from 'styled-components'
import ContentContainer from "components/elements/ContentContainer";
import ProjectBanner from "components/elements/ProjectBanner";
import ProjectDescription from "components/modules/ProjectDescription";

const StyledContainer = styled.div`
    /* This margin conpensates for the banner.
     * It should always be equal to banner + header height.
     **/
    margin-top: 150px;
`

export default function ProjectContent(props) {
    return (
        <StyledContainer>
            <ProjectBanner />
            <ContentContainer>
                <ProjectDescription />
            </ContentContainer>
        </StyledContainer>
    )
}