import React from 'react';
import MemberInfo from '../../modules/basic/components/member-info';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

export default function MemberInfoPage() {
    const {memberId} = useParams<{ memberId: undefined | string }>();

    if (!memberId) return <div>Member id not found. TODO: 404-page</div>;

    return (
        <SContainer>
            <MemberInfo memberId={+memberId}/>
        </SContainer>
    );
}

const SContainer = styled.div`
  width: 100%;
  // 72px header height TODO...
  height: calc(100vh - 72px);
  display: flex;
  align-items: center;
`;