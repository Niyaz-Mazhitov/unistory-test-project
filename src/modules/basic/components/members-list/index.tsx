import React from 'react';
import * as S from './styles';
import {useFindAllMembersQuery} from '../../api';
import {NavLink} from 'react-router-dom';

export default function MembersList() {
    const {data} = useFindAllMembersQuery('');

    return (
        <S.Container>
            <h1>Participation listing (enable only for participants)</h1>
            <S.TableContainer>
                <S.Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Wallet</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.items.map(person => (
                        <tr key={person.id}>
                            <td><NavLink to={`/members/${person.id}`}>{person.username}</NavLink></td>
                            <td>{person.email}</td>
                            <td>{person.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </S.Table>
            </S.TableContainer>
        </S.Container>
    );
}