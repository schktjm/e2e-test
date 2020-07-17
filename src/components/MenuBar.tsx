import React from "react"
import { Link, RouteProps } from "react-router-dom"
import styled from "styled-components";


const MenuBar: React.SFC<RouteProps> = props => {
    return (
        <Wrapper>
            <Link to="/counter">Counter</Link>
            <Link to="/todos">ToDos</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

export default MenuBar;
