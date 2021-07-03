import styled from 'styled-components'
import lottie from 'lottie-web'
import { useRef, useEffect } from 'react'
import animationData from '../../public/lotties/menu-icon.json'

const StyledWrapper = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;

    width: 30px;
    height: 30px;

    cursor: pointer;
`

export default function MenuIcon(props) {

    let animationContainer = useRef()
    const anim = useRef()

    useEffect(() => {
        anim.current = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animationData,
        });

        anim.current.setSpeed(1.2)
        console.log('USE EFFECT')

        return () => anim.current.destroy()
    
    }, []);

    const handleClick = () => {

        if (props.menuIsActive) {
            anim.current.playSegments([65, 0], true)
        } else {
            anim.current.playSegments([25, 90], true)
        }

        props.setMenuIsActive(!props.menuIsActive)
    }

    return (
        <StyledWrapper
            ref={animationContainer}
            onClick={handleClick}
        >
        </StyledWrapper>
    )
}