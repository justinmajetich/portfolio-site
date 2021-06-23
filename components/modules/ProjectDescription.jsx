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
            <StyledProjectTitle>{props.title}</StyledProjectTitle>
            <StyledParagraph>
                {props.summary}
            </StyledParagraph>
            <StyledDetailsWrapper>
                {props.details.map(detail => {
                    return (
                        <ProjectDetail
                            key={detail.id}
                            title={detail.title}
                            description={detail.description}
                        />
                    )
                })}
            </StyledDetailsWrapper>
            <StyledLinksWrapper>
                {props.links.map(link => {
                    return (
                        <ProjectLink
                            key={link.id}
                            title={link.title}
                        />
                    )
                })}
            </StyledLinksWrapper>
        </div>
    )
}