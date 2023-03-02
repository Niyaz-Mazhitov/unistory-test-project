import React from 'react';
import MemberInfo from '../../modules/basic/components/member-info';
import styled from 'styled-components';

export default function MemberInfoPage() {
    return (
        <SContainer>
            <MemberInfo/>
        </SContainer>
    );
}

const SContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
`;