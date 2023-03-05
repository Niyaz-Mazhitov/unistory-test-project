import React from 'react';
import * as S from './styles';
import {IFindAllMembersRes, useFindAllMembersQuery} from '../../api';
import {NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../common/store';
import {basicActions} from '../../store';

export default function MembersList() {
    const {isLoading, data} = useFindAllMembersQuery('');

    return (
        <S.Container>
            <h1>Participation listing (enable only for participants)</h1>
            {isLoading ? <S.Loading><h1>Loading...</h1></S.Loading> : <Table data={data}/>}
        </S.Container>
    );
}

function Table(props: { data: undefined | IFindAllMembersRes }) {
    return (
        <S.TableContainer>
            <S.Table>
                <TableHead/>
                {props.data && <TableBody data={props.data}/>}
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

function TableBody(props: { data: IFindAllMembersRes }) {
    const {data} = props;
    const isShown = useAppSelector(state => state.basic.userData.isShown);

    return (
        <tbody>
        {isShown && <UserData/>}
        {data.items.map(person => (
            <S.Tr key={person.id}>
                <td><NavLink to={`/members/${person.id}`}>{person.username}</NavLink></td>
                <td>{person.email}</td>
                <td>{person.address}</td>
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