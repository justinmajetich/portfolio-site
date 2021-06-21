import styled from 'styled-components'
import SectionButton from 'components/elements/SectionButton'

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
            <SectionButton
                name={'Code'}
                sectionID={'code'}
            />
            <SectionButton
                name={'Art Dept'}
                sectionID={'art-dept'}
            />
            <SectionButton
                name={'Music'}
                sectionID={'music'}    
            />
        </StyledContainer>
    )
}