import React from 'react';
import * as S from './styles';
import {useFindAllMembersQuery} from '../../api';
import {NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../common/store';
import {basicActions} from '../../store';

export default function MembersList() {
    const dispatch = useAppDispatch();
    const {data} = useFindAllMembersQuery('');
    const metamaskWallet = useAppSelector(state => state.basic.metamaskAccount.wallet);
    const {name, email} = useAppSelector(state => state.basic.betaTestRegistrationData);
    const isShownRegistrationData = useAppSelector(state => state.basic.isShownRegistrationData);

    const reset = () => dispatch(basicActions.changeShownRegistrationData(false));

    return (
        <S.Container>
            <h1>Participation listing (enable only for participants)</h1>
            <S.TableContainer>
                <S.Table>
                    <thead>
                    <S.Tr disabledHover={true}>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Wallet</th>
                    </S.Tr>
                    </thead>
                    <tbody>
                    {isShownRegistrationData && <S.Tr active={true}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>
                            <div>
                                {metamaskWallet}
                                <span onClick={reset}>X</span>
                            </div>
                        </td>
                    </S.Tr>}
                    {data?.items.map(person => (
                        <S.Tr key={person.id}>
                            <td><NavLink to={`/members/${person.id}`}>{person.username}</NavLink></td>
                            <td>{person.email}</td>
                            <td>{person.address}</td>
                        </S.Tr>
                    ))}
                    </tbody>
                </S.Table>
            </S.TableContainer>
        </S.Container>
    );
}