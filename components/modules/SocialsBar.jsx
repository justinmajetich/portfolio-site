import SocialIcon from 'components/elements/SocialIcon'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 200px;
`

export default function SocialsBar(props) {
    return (
        <StyledContainer>
            <SocialIcon
                name={'Email'}
                src={'/images/icons/email2.svg'}
            />
            <SocialIcon
                name={'Github'}
                src={'/images/icons/github2.svg'}
            />
            <SocialIcon
                name={'Twitter'}
                src={'/images/icons/twitter2.svg'}
            />
            <SocialIcon
                name={'LinkedIn'}
                src={'/images/icons/linkedin2.svg'}
            />
        </StyledContainer>
    )
}