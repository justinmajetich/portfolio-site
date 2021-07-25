import styled from "styled-components"
import Link from "next/link"
import StyledParagraph from "./StyledParagraph"
import Icon from "./Icon"

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 10px 0;
    cursor: pointer;
`

const StyledLinkDescription = styled(StyledParagraph)`
    margin: 0 10px;
    color: blue;
`

const StyledIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
`

export default function ProjectLink({ link }) {
    return (
        <Link href={link.url}>
            <StyledContainer>
                <StyledIconWrapper><Icon type={link.type}/></StyledIconWrapper>
                <StyledLinkDescription>{link.title}</StyledLinkDescription>
            </StyledContainer>
        </Link>
    )
}