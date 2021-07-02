import styled from 'styled-components'
import Navigation from 'components/modules/Navigation'

const StyledContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;


    width: 100%;
    height: 50px;

    padding: 15px;
`

export default function Header(props) {
    return (
        <StyledContainer>
            <Navigation
                categoryID={props.categoryID}
                menuIsActive={props.menuIsActive}
                setMenuIsActive={props.setMenuIsActive}
            />
        </StyledContainer>
    )
}