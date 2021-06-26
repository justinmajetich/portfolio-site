import styled from 'styled-components'
import Link from 'next/link'
import Icon from 'components/elements/Icon'

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 200px;
`

const StyledIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;

    cursor: pointer;
`

export default function SocialsBar(props) {
    return (
        <StyledContainer>
            <Link href={'mailto:justinmajetich@gmail.com'}>
                <StyledIconWrapper><Icon type={'email'}/></StyledIconWrapper>
            </Link>
            <Link href={'https://github.com/justinmajetich'}>
                <StyledIconWrapper><Icon type={'github'}/></StyledIconWrapper>
            </Link>
            <Link href={'https://twitter.com/JustinMajetich'}>
                <StyledIconWrapper><Icon type={'twitter'}/></StyledIconWrapper>
            </Link>
            <Link href={'https://www.linkedin.com/in/justin-majetich/'}>
                <StyledIconWrapper><Icon type={'linkedin'}/></StyledIconWrapper>
            </Link>
        </StyledContainer>
    )
}