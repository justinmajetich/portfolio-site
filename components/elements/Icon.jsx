import styled from 'styled-components'
import Image from 'next/image'
import { icons } from 'utils/icons'

const StyledWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
`

export default function Icon(props) {

    return (
        <StyledWrapper>
            <Image
                src={icons[props.type]}
                alt={props.alternativeText ?? props.type}
                layout={'fill'}
                objectFit={'contain'}
            />
        </StyledWrapper>
    )
}