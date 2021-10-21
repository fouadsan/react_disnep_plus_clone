import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            home
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: cal(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    background-color: blue;
`