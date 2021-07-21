import styled from "styled-components"

const StyledWrapper = styled.div`
    display: flex;
    margin-top: 4px;
`

const StyledDetailContent = styled.p`
    margin: 0px 5px 0px 0px;
    color: ${props => props.theme.darkGray};
`

const StyledDetailTitle = styled(StyledDetailContent)`
    /* font-weight: 500; */
    color: black;
`

export default function ProjectDetail(props) {
    return (
        <StyledWrapper>
            <StyledDetailTitle>{props.title + ':'}</StyledDetailTitle>
            <StyledDetailContent>{props.description}</StyledDetailContent>
        </StyledWrapper>
    )
}