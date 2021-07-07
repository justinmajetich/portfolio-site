import styled from 'styled-components'
import ProjectDetail from 'components/elements/ProjectDetail'
import ProjectLink from 'components/elements/ProjectLink'
import StyledParagraph from 'components/elements/StyledParagraph'
import ParseTextToParagraphs from 'utils/parseTextToParagraphs'

const StyledDetailsWrapper = styled.div`
    margin-top: 20px;
`

const StyledLinksWrapper = styled.div`
    margin-top: 60px;
`

export default function ProjectDescription(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            {ParseTextToParagraphs(props.summary, StyledParagraph)}
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
                            link={link}
                        />
                    )
                })}
            </StyledLinksWrapper>
        </div>
    )
}