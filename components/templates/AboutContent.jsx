import styled from 'styled-components'
import ContentContainer from 'components/elements/ContentContainer'
import Portrait from 'components/elements/Portrait'
import StyledParagraph from 'components/elements/StyledParagraph'
import { device } from 'utils/media-breakpoints'
import ParseTextToParagraphs from 'utils/parseTextToParagraphs'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    margin: 0px 0px 40px 0px;

    @media ${device.tablet} {
        align-items: flex-start;
    }

    @media ${device.laptop} {
        flex-direction: row;
        margin: 80px 0px 100px 0px;
    }
`

const StyledDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    @media ${device.tablet} {
        margin-top: 60px;
    }

    @media ${device.laptop} {
        margin-left: 100px;
        margin-top: 0px;
    }
`

const StyledHeader = styled.h1`
    color: ${props => props.theme.violet}
`

export default function AboutContent({ content }) {
    return (
        <ContentContainer>
            <StyledContainer>
                <Portrait portrait={content.portrait}/>
                <StyledDescriptionContainer>
                    <StyledHeader>{content.header}</StyledHeader>
                    {ParseTextToParagraphs(content.description, StyledParagraph)}
                </StyledDescriptionContainer>
            </StyledContainer>
        </ContentContainer>
    )
}