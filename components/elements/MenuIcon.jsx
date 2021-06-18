import styled from 'styled-components'
import Image from 'next/image'

const StyledWrapper = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;

    cursor: pointer;
`

export default function MenuIcon(props) {


    const iconSrc = props.menuIsActive ? '/images/icons/x.svg' : '/images/icons/hamburger2.svg'

    return (
        <StyledWrapper
            onClick={() => props.setMenuIsActive(!props.menuIsActive)}
        >
            <Image
                src={iconSrc}
                alt='Menu'
                width={18}
                height={18}
            />
        </StyledWrapper>
    )
}