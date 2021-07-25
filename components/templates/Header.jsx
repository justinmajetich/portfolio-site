import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Navigation from 'components/modules/Navigation'
import { fadeIn } from 'utils/animations'
import BackToCategoryButton from 'components/elements/BackToCategoryButton'

const StyledContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.menuIsActive || props.isProjectPage ? 'space-between' : 'flex-end'};
    width: 100%;
    height: 50px;
    padding: 15px;
    background-color: ${props => props.isProjectPage && props.scrollPosition > 50 ? 'rgb(255,255,255,0.9)' : 'none'};
    transition: background-color .25s;
`

const StyledInitials = styled.h3`
    position: relative;
    z-index: 2;
    animation: ${fadeIn} .25s 1;
    cursor: pointer; 
`

export default function Header(props) {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScrollPosition = () => { setScrollPosition(window.scrollY) }

    useEffect(() => {

        if (props.isProjectPage) {
            window.addEventListener('scroll', handleScrollPosition)
            return () => window.removeEventListener('scroll', handleScrollPosition)
        }

    }, [scrollPosition]);

    return (
        <StyledContainer
            menuIsActive={props.menuIsActive}
            isProjectPage={props.isProjectPage}
            scrollPosition={scrollPosition}
        >
            {props.menuIsActive ?
                <Link href={'/'}>
                    <StyledInitials>
                        {'JM'}
                    </StyledInitials>
                </Link>
                :
                (props.isProjectPage ? 
                    <BackToCategoryButton category={props.category}/>
                    :
                    null
                )
            }
            <Navigation
                currentPageID={props.pageID}
                categoryID={props.categoryID}
                menuIsActive={props.menuIsActive}
                setMenuIsActive={props.setMenuIsActive}
            />
        </StyledContainer>
    )
}