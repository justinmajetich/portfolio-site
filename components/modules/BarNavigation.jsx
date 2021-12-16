import styled from 'styled-components'
import { useState } from 'react'
import Link from 'next/link'
import { fadeIn } from 'utils/animations'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    animation: ${fadeIn} .25s;
`

const StyledLinksWrapper = styled.div`
    margin-left: 40px;
`

const StyledLinkText = styled.p`
    font-family: ${props => props.theme.headerFont}, Helvetica Neue, sans-serif;
    font-size: 1.4em;
    font-weight: 500;
    cursor: pointer;
    margin: 0;
    transition: color .25s;

    :hover {
        color: ${props => props.theme.violet};
    }
`

export default function BarNavigation(props) {

    // Track if any links are being hovered and pass value to each NavLink
    // A hover state will override a current page state
    const [hoveredLink, setHoveredLink] = useState(null)

    const linkData = [
        {id: 1, text: 'Work', href: '/work'},
        {id: 2, text: 'About', href: '/about'},
    ]

    return (
        <StyledContainer categoryID={props.categoryID}>
            {linkData.map( link => {
                return (
                    <Link href={link.href} key={link.id}>
                        <StyledLinksWrapper>
                            <StyledLinkText>{link.text}</StyledLinkText>
                        </StyledLinksWrapper>
                    </Link>
                )}
            )}
            <a href='https://drive.google.com/file/d/1ONG93lEUd092OAT3lVEQtDCSu4JCXoWn/view?usp=sharing' target="_blank">
                <StyledLinksWrapper>
                    <StyledLinkText>{'Resume'}</StyledLinkText>
                </StyledLinksWrapper>
            </a>
        </StyledContainer>
    )
}