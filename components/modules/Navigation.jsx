import styled from 'styled-components'
import { useState } from 'react'
import NavLink from 'components/elements/NavLink'
import MenuIcon from 'components/elements/MenuIcon'
import SocialsBar from './SocialsBar'

const StyledNavigation = styled.div`
`

const StyledMenuWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    width: 100%;
    height: 100vh;
    padding: 60px;

    background: white;
`

const StyledNavLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export default function Navigation(props) {

    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <StyledNavigation>
            <MenuIcon
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
            />
            {menuIsActive
            ?
                <StyledMenuWrapper>
                    <StyledNavLinksContainer>
                        <NavLink text={'Home'} />
                        <NavLink text={'Code'} />
                        <NavLink text={'Art Dept'} />
                        <NavLink text={'Music'} />
                        <NavLink text={'About Me'} />
                    </StyledNavLinksContainer>
                    <SocialsBar />
                </StyledMenuWrapper>
            :
                null
            }
        </StyledNavigation>
    )
}