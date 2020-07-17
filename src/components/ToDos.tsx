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
    const [items, setItems] = useState<{ [id: string]: ItemType }>({});

    const handleTextInput = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setText(target.value);
    }
    const setNewItem = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const item: ItemType = { text, done: false, id: randomStr() };
            setItems({ ...items, [item.id]: item });
            setText("");
        }
    }
    const deleteItem = (id: string) => () => {
        const { [id]: _, ...lefted } = items;
        setItems(lefted)
    }
    const checkItem = (id: string) => () => {
        const item = items[id];
        item.done = !item.done;
        setItems({ ...items, [id]: item });
    }

    return (
        <Wrapper>
            <TextInput id="text-field" value={text} onChange={handleTextInput} onKeyDown={setNewItem} />
            <List>
                {
                    Object.values(items).map(item => (
                        <Item id={item.id} key={item.id}>
                            <CheckBox checked={item.done} onChange={checkItem(item.id)} /> {item.text} <DeleteBtn onClick={deleteItem(item.id)}>x</DeleteBtn>
                        </Item>
                    ))
                }
            </List>
        </Wrapper>
    )
};

const Wrapper = styled.div``;
const TextInput = styled.input.attrs({ type: "text" })``;
const List = styled.ul``;
const Item = styled.li``;
const CheckBox = styled.input.attrs({ type: "checkbox" })``;
const DeleteBtn = styled.button``;

export default ToDos;
