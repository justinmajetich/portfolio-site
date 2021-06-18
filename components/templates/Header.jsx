import styled from 'styled-components'
import Identity from 'components/elements/Identity'
import Navigation from 'components/modules/Navigation'

const StyledContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: ${props => props.isLanding ? 'flex-end' : 'space-between'}; */
    justify-content: flex-end;


    width: 100%;
    height: 50px;

    padding: 15px;

    /* background: white; */
`

export default function Header(props) {
    return (
        <StyledContainer isLanding={props.isLanding}>
            {/* {props.isLanding ? null : <Identity />} */}
            <Navigation />
        </StyledContainer>
    )
}