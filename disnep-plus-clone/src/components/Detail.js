import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import db from '../firebase'

function Detail() {
    const [singleMovie, setSingleMovie] = useState({});
    const {id} = useParams();
     const history = useNavigate()

    useEffect(() => {
        // Grab the movie info from db
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                // save the movie data
                setSingleMovie(doc.data())
            } else {
                // redirect to home page
                history.push("/");
            }
        })
    }, [id])

    const {subtitle, backgroundImg, description} = singleMovie

    return (
        <Container>
            <Background>
                <img  src={backgroundImg} alt="" />
            </Background>
            <ImageTitle>
                <img src ="/images/viewers-pixar.png" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {subtitle}
            </SubTitle>
            <Description>
                {description}
            </Description>
        </Container>
    )
}

const Container = styled.div`
    min-height: cal(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: #fff;
    }
`

const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    max-width: 760px;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`

export default Detail
