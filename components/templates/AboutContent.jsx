import styled from 'styled-components'
import Link from 'next/link'
import ContentContainer from 'components/elements/ContentContainer'
import Portrait from 'components/elements/Portrait'
import StyledParagraph from 'components/elements/StyledParagraph'
import { device } from 'utils/media-breakpoints'
import ParseTextToParagraphs from 'utils/parseTextToParagraphs'
import ResumeButton from 'components/elements/ResumeButton'
import Socials from 'components/modules/Socials'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70vh;

    @media ${device.laptop} {
        flex-direction: row;
    }
`

const StyledDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 580px;
    margin-top: 30px;

    @media ${device.laptop} {
        margin-left: 100px;
        margin-top: 0px;
    }
`

const StyledDescriptionText = styled(StyledParagraph)`
    font-size: 1.1em;
`

const StyledLinkText = styled.span`
    color: blue;
    cursor: pointer;
`

const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;

    @media ${device.laptop} {
        justify-content: flex-start;
    }
`

const StyledSocialsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    @media ${device.laptop} {
        justify-content: flex-start;
    }
`

export default function AboutContent({ content }) {
    return (
        <ContentContainer>
            <StyledContainer>
                <Portrait portrait={content.portrait}/>
                <StyledDescriptionContainer>
                    <h1>{content.header}</h1>
                    {ParseTextToParagraphs(content.description, StyledDescriptionText)}
                    <StyledDescriptionText>
                        {'You can reach me at '}
                        <Link href={'mailto:justinmajetich@gmail.com'}>
                            <StyledLinkText>{'justinmajetich@gmail.com'}</StyledLinkText>
                        </Link>
                        {'!'}
                    </StyledDescriptionText>
                    
                    <StyledButtonWrapper>
                        <ResumeButton url={content.resume_url}/>
                    </StyledButtonWrapper>                        
                    <StyledSocialsWrapper>
                        <Socials />
                    </StyledSocialsWrapper>
                </StyledDescriptionContainer>
            </StyledContainer>
        </ContentContainer>
    )
}