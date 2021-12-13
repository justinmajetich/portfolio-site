import styled from 'styled-components'
import ProjectDetail from 'components/elements/ProjectDetail'
import ProjectLink from 'components/elements/ProjectLink'
import StyledParagraph from 'components/elements/StyledParagraph'
import ParseTextToParagraphs from 'utils/parseTextToParagraphs'
import ProjectTags from '../elements/ProjectTags'

const StyledContainer = styled.div`
    width: 100%;
    max-width: 720px;
`

const StyledDetailsWrapper = styled.div`
    margin-top: 20px;
`

const StyledLinksWrapper = styled.div`
    margin-top: 40px;
`

const StyledDescriptionText = styled(StyledParagraph)`
    /* color: ${props => props.theme.darkGray}; */
    margin-top: 25px;
`

export default function ProjectDescription(props) {
    return (
        <StyledContainer>
            <h2>{props.title}</h2>
            <ProjectTags tags={props.tags} categoryID={props.categoryID}/>
            {ParseTextToParagraphs(props.summary, StyledDescriptionText)}
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
            {props.links.length ? 
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
            : null}
        </StyledContainer>
    )
}