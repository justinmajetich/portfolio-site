import styled from 'styled-components'
import { useState } from 'react'
import NavLink, { slideLeft } from 'components/elements/NavLink'
import { selectEffect } from 'components/elements/FilterTag'
import MenuIcon from 'components/modules/MenuIcon'
import { fadeIn } from 'utils/animations'

const StyledMenuWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: 100%;
    height: 100vh;
    padding: 60px;

    background: ${props => props.theme.paleLavender};
    /* animation: ${fadeIn} .25s; */
`

const StyledNavLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const StyledLinkWrapper = styled.div`
    animation: ${slideLeft} ${(4) / 5}s 1;
`

const StyledLinkText = styled.h2`
    font-family: ${props => props.theme.headerFont}, Helvetica Neue, sans-serif;
    font-weight: ${props => props.isCurrentPage ? '600' : '500'};
    color: ${props => props.isCurrentPage ? props.theme.violet : 'black'};
    white-space: nowrap;
    cursor: pointer;
    margin: 0;
    padding: 24px 0;

    :hover {
        animation: ${selectEffect} .25s cubic-bezier(0.42, 0.0, 0.58, 1.0) 1;
    }
`

export default function DropdownNavigation(props) {

    // Track if any links are being hovered and pass value to each NavLink
    // A hover state will override a current page state
    const [hoveredLink, setHoveredLink] = useState(null)

    const linkData = [
        {id: 0, text: 'Home', href: '/'},
        {id: 1, text: 'Work', href: '/work'},
        {id: 2, text: 'About', href: '/about'}
    ]

    return (
        <>
            {props.menuIsActive
            ?
            <StyledMenuWrapper categoryID={props.categoryID}>
                <StyledNavLinksContainer>
                    {linkData.map( link => {
                        return (
                            <NavLink
                                key={link.id}
                                id={link.id}
                                text={link.text}
                                href={link.href}
                                currentPageID={props.currentPageID}
                                setHoveredLink={setHoveredLink}
                                hoveredLink={hoveredLink}
                                menuIsActive={props.menuIsActive}
                                setMenuIsActive={props.setMenuIsActive}
                            />
                        )}
                    )}
                    <StyledLinkWrapper>
                        <a href='https://drive.google.com/file/d/1_m0JpIavhXMj7ZKoz2l2ZBloLujQCMEg/view?usp=sharing' target="_blank">
                            <StyledLinkText>{'Resume'}</StyledLinkText>
                        </a>
                    </StyledLinkWrapper>
                </StyledNavLinksContainer>
            </StyledMenuWrapper>
            :
                null
            }
            <MenuIcon
                menuIsActive={props.menuIsActive}
                setMenuIsActive={props.setMenuIsActive}
            />
        </>
    )
}