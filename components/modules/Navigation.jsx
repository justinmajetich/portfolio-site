import styled from 'styled-components'
import { useState } from 'react'
import NavLink from 'components/elements/NavLink'
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
    /* justify-content: space-between; */

    width: 100%;
    height: 100vh;
    padding: 60px;

    background: ${props => props.categoryID ? props.theme[props.categoryID.toString()] : props.theme.lightGray};
    animation: ${fadeIn} .25s;

    /* overflow: hidden; */
`

const StyledNavLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export default function Navigation(props) {

    // Track if any links are being hovered and pass value to each NavLink
    // A hover state will override a current page state
    const [hoveredLink, setHoveredLink] = useState(null)

    const linkData = [
        // {id: 0, text: 'Home', href: '/'},
        {id: 1, text: 'Code', href: '/code'},
        {id: 2, text: 'Art Dept', href: '/art-dept'},
        {id: 3, text: 'Music', href: '/music'},
        {id: 4, text: 'About Me', href: '/about'}
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
                            />
                        )}
                    )}
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