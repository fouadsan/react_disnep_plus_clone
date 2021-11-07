import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                <Wrapper>
                    <img src="https://fr.web.img5.acsta.net/pictures/20/10/01/11/26/1905965.jpg" alt="" />
                </Wrapper>
                <Wrapper>
                    <img src="https://fr.web.img5.acsta.net/pictures/20/10/01/11/26/1905965.jpg" alt="" />
                </Wrapper>
                <Wrapper>
                    <img src="https://fr.web.img5.acsta.net/pictures/20/10/01/11/26/1905965.jpg" alt="" />
                </Wrapper>
                <Wrapper>
                    <img src="https://fr.web.img5.acsta.net/pictures/20/10/01/11/26/1905965.jpg" alt="" />
                </Wrapper>
                <Wrapper>
                    <img src="https://fr.web.img5.acsta.net/pictures/20/10/01/11/26/1905965.jpg" alt="" />
                </Wrapper>
                <Wrapper>
                    <img src="https://fr.web.img5.acsta.net/pictures/20/10/01/11/26/1905965.jpg" alt="" />
                </Wrapper>
                <Wrapper>
                    <img src="https://fr.web.img5.acsta.net/pictures/20/10/01/11/26/1905965.jpg" alt="" />
                </Wrapper>
                <Wrapper>
                    <img src="https://fr.web.img5.acsta.net/pictures/20/10/01/11/26/1905965.jpg" alt="" />
                </Wrapper>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 20px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrapper = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 4px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`

export default Movies