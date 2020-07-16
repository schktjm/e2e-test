import React, { useState } from "react"
import styled from "styled-components"

type Props = {}

const Counter: React.FC<Props> = props => {
    const [count, setCount] = useState<number>(0);

    return (
        <Wrapper id="conter">
            <Button onClick={() => setCount(count - 1)}>-</Button>
            <Display>{count}</Display>
            <Button onClick={() => setCount(count + 1)}>+</Button>
        </Wrapper>
    )
}

const Display = styled.span``;
const Button = styled.button``;

const Wrapper = styled.div`
    display: flex;
`;

export default Counter;
