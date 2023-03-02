import React from 'react';
import * as S from './styles';

interface IItem {
    title: string;
    value: string;
}

const items: IItem[] = [
    {title: 'Lorem ipsum dolor', value: '12, 345'},
    {title: 'Lorem ipsum dolor', value: '12, 345'},
    {title: 'Lorem ipsum dolor', value: '12, 345'}
];

export default function RoadmapStats() {
    return (
        <S.Container>
            <h1>Roadmap stats</h1>
            <S.Items>
                {items.map((item: IItem, index: number) => <Item key={index} {...item}/>)}
            </S.Items>
        </S.Container>
    );
}

function Item(props: IItem) {
    const {title, value} = props;

    return (
        <S.Item>
            <hr/>
            <h1>{value}</h1>
            <span>{title}</span>
        </S.Item>
    );
}