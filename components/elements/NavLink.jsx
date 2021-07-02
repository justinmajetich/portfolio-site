import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import Icon from 'components/elements/Icon'
import { fadeIn } from 'utils/animations'

const slideLeft = keyframes`
    from { transform: translateX(60px); opacity: 0;}
    to { transform: translateX(0px); opacity: 1;}
`

const StyledContainer = styled.div`
    position: relative;
    transform: scale(1);

    transition: .25s ease;

    :hover {
        transform: scale(1.05);
    }
`

const StyledNavText = styled.p`
    font-size: 1.5em;
    font-weight: ${props => props.isCurrentPage ? '700' : '400'};
    white-space: nowrap;
    cursor: pointer;
    margin: 0;
    padding: 24px 0;

    animation: ${slideLeft} ${props => props.animationSpeed.toString()}s 1;
`

const StyledArrowContainer = styled.div`
    position: absolute;
    top: 0;
    left: -40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`

const StyledArrowWrapper = styled.div`
    width: 22px;
    height: 24px;
    animation: ${fadeIn} .25s 1;
`

export default function NavLink(props) {

    const handleMouseOver = () => {props.setHoveredLink(props.id)}
    const handleMouseLeave = () => {props.setHoveredLink(null)}

    const showArrow = () => {
        if (props.hoveredLink != null) {
            if (props.hoveredLink == props.id) {
                return true
            }
        } else {
            if (props.id == props.currentPageID) {
                return true
            }
        }
        return false
    }

    return (
        <Link
            href={props.href}
        >
            <StyledContainer>
                <StyledNavText
                    isCurrentPage={props.id == props.currentPageID}
                    animationSpeed={(props.id + 1) / 5}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >
                    {props.text}
                </StyledNavText>
                {showArrow() ? 
                    <StyledArrowContainer>
                        <StyledArrowWrapper>
                            <Icon type={'arrowHorizontalShort'}/>
                        </StyledArrowWrapper>
                    </StyledArrowContainer>
                : null}
            </StyledContainer>
        </Link>
    )
}