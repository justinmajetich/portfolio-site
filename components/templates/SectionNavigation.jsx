import Button from 'components/elements/Button'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 100%;

    margin-top: 10px;
`

export default function SectionNavigation(props) {
    return (
        <StyledContainer>
            <Button text={'Code'}/>
            <Button text={'Art Dept'}/>
            <Button text={'Music'}/>
        </StyledContainer>
    )
}