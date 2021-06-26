import styled from 'styled-components'
import Icon from '../elements/Icon'

const StyledWrapper = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;

    width: 18px;
    height: 18px;

    cursor: pointer;
`

export default function MenuIcon(props) {
    return (
        <StyledWrapper
            onClick={() => props.setMenuIsActive(!props.menuIsActive)}
        >
            <Icon
                type={props.menuIsActive ? 'x' : 'hamburger'}
                alt={'Navigation Menu'}
            />
        </StyledWrapper>
    )
}