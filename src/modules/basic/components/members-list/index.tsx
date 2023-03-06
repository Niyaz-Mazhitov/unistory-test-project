import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {useFindAllMembersQuery} from '../../api';
import {NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../common/store';
import {basicActions} from '../../store';
import {IMember} from '../../interfaces';
import Button from '../../../../common/components/button';

export default function MembersList() {
    const [page, setPage] = useState<number>(15);
    const [isAll, setIsAll] = useState<boolean>(false);
    const [members, setMembers] = useState<IMember[]>([]);
    const {data, isLoading, isFetching} = useFindAllMembersQuery({page});

    useEffect(() => {
        if (data?.items.length) {
            setIsAll(page + 1 === data.meta.totalPages);
            setMembers(prevState => [...prevState, ...data.items]);
        }
    }, [data]);

    return (
        <S.Container>
            <h1>Participation listing (enable only for participants)</h1>
            {isLoading ? <S.Loading><h1>Loading...</h1></S.Loading> : <Table members={members}/>}
            <S.FindMore onClick={() => setPage(prevState => prevState + 1)}>
                <Button disabled={isAll || isFetching}>
                    {isFetching ? 'Loading...' : isAll ? 'The whole list' : 'Show more'}
                </Button>
            </S.FindMore>
        </S.Container>
    );
}

function Table(props: { members: IMember[] }) {
    return (
        <S.TableContainer>
            <S.Table>
                <TableHead/>
                {<TableBody members={props.members}/>}
            </S.Table>
        </S.TableContainer>
    );
}

function TableHead() {
    return (
        <thead>
        <S.Tr disabledHover={true}>
            <th>Name</th>
            <th>Email</th>
            <th>Wallet</th>
        </S.Tr>
        </thead>
    );
}

function TableBody(props: { members: IMember[] }) {
    const {members} = props;
    const isShown = useAppSelector(state => state.basic.userData.isShown);

    return (
        <tbody>
        {isShown && <UserData/>}
        {members.map(member => (
            <S.Tr key={member.id}>
                <td><NavLink to={`/members/${member.id}`}>{member.username}</NavLink></td>
                <td>{member.email}</td>
                <td>{member.address}</td>
            </S.Tr>
        ))}
        </tbody>
    );
}

function UserData() {
    const dispatch = useAppDispatch();
    const {name, email} = useAppSelector(state => state.basic.userData);
    const metamaskWallet = useAppSelector(state => state.basic.metamaskAccount.wallet);

    const reset = () => dispatch(basicActions.changeShowingUserDataStatus(false));

    return (
        <S.Tr active={true}>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <div>
                    {metamaskWallet}
                    <span onClick={reset}>X</span>
                </div>
            </td>
        </S.Tr>
    );
}