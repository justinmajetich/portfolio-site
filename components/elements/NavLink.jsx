import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import { selectEffect } from 'components/elements/FilterTag'
import Icon from 'components/elements/Icon'

export const slideLeft = keyframes`
    from { transform: translateX(60px); opacity: 0;}
    to { transform: translateX(0px); opacity: 1;}
`

const arrowSlide = keyframes`
    from { transform: translateX(-15px); opacity: 0;}
    to { transform: translateX(0px); opacity: 1;}
`

const StyledContainer = styled.div`
    position: relative;

    :hover {
        animation: ${selectEffect} .25s cubic-bezier(0.42, 0.0, 0.58, 1.0) 1;
    }
`

const StyledNavText = styled.h2`
    font-family: ${props => props.theme.headerFont}, Helvetica Neue, sans-serif;
    font-weight: ${props => props.isCurrentPage ? '600' : '500'};
    color: ${props => props.isCurrentPage ? props.theme.violet : 'black'};
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
    animation: ${arrowSlide} .25s 1;
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
                {/* {showArrow() ? 
                    <StyledArrowContainer>
                        <StyledArrowWrapper>
                            <Icon type={'arrowHorizontalShort'}/>
                        </StyledArrowWrapper>
                    </StyledArrowContainer>
                : null} */}
            </StyledContainer>
        </Link>
    )
}