import React, { useState } from "react"
import styled from "styled-components"

type Props = {}

type ItemType = {
    id: string;
    text: string;
    done: boolean;
}

const randomStr = (): string => {
    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const N = 16
    return Array.from(Array(N)).map(() => S[Math.floor(Math.random() * S.length)]).join('')
}

const ToDos: React.FC<Props> = props => {
    const [text, setText] = useState<string>("");
    const [items, setItems] = useState<ItemType[]>([]);

    const setNewItem = (e: React.KeyboardEvent) => {
        if (e.key == 'Enter') {
            const i: ItemType = { text, done: false, id: randomStr() };
            setItems([...items, i]);
            setText("");
        }
    }
    const handleTextInput = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setText(target.value);
    }

    return (
        <Wrapper>
            <TextInput type="text" value={text} onChange={handleTextInput} onKeyDown={setNewItem} />
            <List>
                {items.map(item => (<Item key={item.id}>{item.text}</Item>))}
            </List>
        </Wrapper>
    )
};

const Wrapper = styled.div``;
const TextInput = styled.input``;
const List = styled.ul``;
const Item = styled.li``;

export default ToDos;
