import styled, { keyframes }from 'styled-components'
import { device } from 'utils/media-breakpoints'
import Link from 'next/link'
import Icon from 'components/elements/Icon'

const arrowBob = keyframes`
    0% { transform: translateY(0px) scaleY(1) }
    50% { transform: translateY(-25px) scaleY(0.9) }
    100% { transform: translateY(0px) scaleY(1) }
`

const StyledScrollDirective = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
`

const StyledArrowWrapper = styled.div`
    position: absolute;
    bottom: 70px;
    right: 0;
    display: flex;
    align-items: flex-start;
    width: 13px;
    height: 140px;

    animation: ${arrowBob} 2s ease-in-out infinite;

    @media ${device.laptop} {
        display: none;
    }
`

export default function LandingScrollDirective(props) {
    return (
        <StyledScrollDirective>
            <Link href={'/#work'}>
                <StyledArrowWrapper>
                    <Icon type='arrowVertical'/>
                </StyledArrowWrapper>
            </Link>
        </StyledScrollDirective>
    )
}