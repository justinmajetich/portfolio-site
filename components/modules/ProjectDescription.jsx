import styled from 'styled-components'
import ProjectDetail from 'components/elements/ProjectDetail'
import ProjectLink from 'components/elements/ProjectLink'
import StyledParagraph from 'components/elements/StyledParagraph'

const StyledProjectTitle = styled.h1`

`

const StyledDetailsWrapper = styled.div`
    margin-top: 20px;
`

const StyledLinksWrapper = styled.div`
    margin-top: 60px;
`

export default function ProjectDescription(props) {
    return (
        <div>
            <StyledProjectTitle>Project Title</StyledProjectTitle>
            <StyledParagraph>
                {'VR Wheelchair is a wheelchair locomotion system for virtual reality applications made with Unity. The package contains a complete player controller rig which can be easily imported as a prefab into an existing project. The controller is layered closely on top of Unity\'s XR Interaction Toolkit to provide cross-platform compatibility.'}
            </StyledParagraph>
            <StyledDetailsWrapper>
                <ProjectDetail
                    title={'Role'}
                    content={'Developer'}
                />
                <ProjectDetail
                    title={'Tools'}
                    content={'C#, Unity'}
                />
            </StyledDetailsWrapper>
            <StyledLinksWrapper>
                <ProjectLink />
                <ProjectLink />
            </StyledLinksWrapper>
        </div>
    )
}