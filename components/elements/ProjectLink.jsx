import styled from "styled-components"
import Link from "next/link"
import Icon from "./Icon"

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 10px 0;
    cursor: pointer;
`

const StyledLinkDescription = styled.p`
    margin: 0 10px;
    color: ${props => props.theme.violet};
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
        <a href={link.url} target="_blank">
            <StyledContainer>
                <StyledIconWrapper><Icon type={link.type}/></StyledIconWrapper>
                <StyledLinkDescription>{link.title}</StyledLinkDescription>
            </StyledContainer>
        </a>
    )
}