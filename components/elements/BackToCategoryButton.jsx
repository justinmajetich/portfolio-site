import styled from 'styled-components'
import Icon from 'components/elements/Icon'
import Link from 'next/link'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const StyledArrowWrapper = styled.div`
    width: 22px;
    height: 24px;
    margin: 0px 5px;
    transform: rotate(180deg);
`

const StyledText = styled.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 10px;
    color: black;
`

export default function BackToCategoryButton(props) {
    return (
        <Link href={'/' + props.category.slug}>
            <StyledWrapper>
                <StyledArrowWrapper>
                    <Icon type={'arrowHorizontalShort'}/>
                </StyledArrowWrapper>
                <StyledText
                    categoryID={props.category.id}
                >
                    {'Back to ' + props.category.title}
                </StyledText>
            </StyledWrapper>
        </Link>
    )
}