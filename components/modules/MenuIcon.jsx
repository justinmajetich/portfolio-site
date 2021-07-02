import styled from 'styled-components'
import Lottie from 'react-lottie'
import menuAnimation from '/public/lotties/hamburger-collapse-2.json'
import Icon from '../elements/Icon'

const StyledWrapper = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;

    width: 36px;
    height: 36px;

    cursor: pointer;
`

const defaultLottieOptions = {
    loop: true,
    autoplay: false,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

export default function MenuIcon(props) {
    return (
        <StyledWrapper
            onClick={() => props.setMenuIsActive(!props.menuIsActive)}
        >
            {/* <Icon
                type={props.menuIsActive ? 'x' : 'hamburger'}
                alt={'Navigation Menu'}
            /> */}
            <Lottie
                options={{
                    ...defaultLottieOptions,
                    animationData: menuAnimation
                }}
                height={200}
                width={200}
                isStopped={!props.menuIsActive}
            />
        </StyledWrapper>
    )
}