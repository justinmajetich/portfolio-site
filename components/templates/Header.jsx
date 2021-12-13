import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { device } from 'utils/media-breakpoints'
import DropdownNavigation from 'components/modules/DropdownNavigation'
import BarNavigation from 'components/modules/BarNavigation'
import { fadeIn } from 'utils/animations'
import { Desktop, Mobile } from 'utils/media-breakpoints'


const StyledContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 40px;
    padding: 10px 10px 10px;
    transition: ${props => !props.isLandingPage ? 'background .2s' : 'none'};
    
    background: ${props => props.isLandingPage ? (props.scrollPosition > 470 ? props.theme.gradient : 'transparent') : (props.scrollPosition > 0 ? props.theme.gradient : 'transparent')};

    @media ${device.mobileL} {
        background: ${props => props.isLandingPage ? (props.scrollPosition > 320 ? props.theme.gradient : 'transparent') : (props.scrollPosition > 0 ? props.theme.gradient : 'transparent')};
    }

    @media ${device.tablet} {
        background: ${props => props.isLandingPage ? (props.scrollPosition > 380 ? props.theme.gradient : 'transparent') : (props.scrollPosition > 0 ? props.theme.gradient : 'transparent')};
    }

    @media ${device.laptop} {
        background: ${props => props.isLandingPage ? (props.scrollPosition > 540 ? props.theme.gradient : 'transparent') : (props.scrollPosition > 0 ? props.theme.gradient : 'transparent')};
        padding: 20px 40px 20px;
        min-height: 80px;
    }
`

const StyledInitials = styled.h3`
    position: relative;
    z-index: 2;
    animation: ${fadeIn} .25s 1;
    color: ${props => props.theme.violet};
    margin: 0;
    line-height: 0;
    cursor: pointer;

    @media ${device.laptop} {
        font-size: 1.8em;
    }
`

export default function Header(props) {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScrollPosition = () => { setScrollPosition(window.scrollY) }

    useEffect(() => {

        window.addEventListener('scroll', handleScrollPosition)
        return () => window.removeEventListener('scroll', handleScrollPosition)

    }, [scrollPosition]);

    return (
        <StyledContainer
            menuIsActive={props.menuIsActive}
            isLandingPage={props.isLandingPage}
            scrollPosition={scrollPosition}
        >
            <Link href={'/'}>
                <StyledInitials>
                    {'🔮'}
                </StyledInitials>
            </Link>
            <Desktop><BarNavigation /></Desktop>
            <Mobile><DropdownNavigation
                currentPageID={props.pageID}
                categoryID={props.categoryID}
                menuIsActive={props.menuIsActive}
                setMenuIsActive={props.setMenuIsActive}
            /></Mobile>
        </StyledContainer>
    )
}