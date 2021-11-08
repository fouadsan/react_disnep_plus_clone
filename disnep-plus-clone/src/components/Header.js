import React, { useEffect } from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup, signOut  } from "firebase/auth";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context'

function Header() {
    const {user, setUser} = useGlobalContext();
    const history = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    isLogin: true
                })
            }
        })
    }, [])

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            const user = result.user;
            setUser({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                isLogin: true
            })
            history.push("/");
            // ...
        }).catch((error) => {
            console.log("Something went wrong");
        });
    }

    const signout = () => {
        signOut(auth)
        .then(() => {
            setUser({
                name: "",
                email: "",
                photo: "",
                isLogin: false
            })
            history.push("/login");
        }).catch((error) => {
            console.log("Something went wrong");
        })
    }

    return (
        <Nav>
            <Logo src="/images/logo.svg" alt="" />
            {!user.isLogin ?
            <LoginContainer>
                <Login onClick={signIn}>Login</Login>
            </LoginContainer> :
                <>
                    <NavMenu>
                        <a>
                            <img src="/images/home-icon.svg" alt="" />
                            <span>HOME</span>
                        </a>
                        <a>
                            <img src="/images/SEARCH-icon.svg" alt="" />
                            <span>SEARCH</span>
                        </a>
                        <a>
                            <img src="/images/watchlist-icon.svg" alt="" />
                            <span>WATCHLIST</span>
                        </a>
                        <a>
                            <img src="/images/original-icon.svg" alt="" />
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <img src="/images/movie-icon.svg" alt="" />
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <img src="/images/series-icon.svg" alt="" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <UserImg
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
                     onClick={signout}
                     />
                </>    
            }
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const LoginContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`

const Logo = styled.img`
    width: 80px;
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px; 
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background-color: #fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scale(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`