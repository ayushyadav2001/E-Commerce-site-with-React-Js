import styled from 'styled-components'
const Container=styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500;

`;

const Anouncement = () => {
    return (
        <Container>
            Super Deals free shiping on order 200$
        </Container>
    )
}

export default Anouncement
