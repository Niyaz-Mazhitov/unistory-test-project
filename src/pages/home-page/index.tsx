import React from 'react';
import styled from 'styled-components';
import Welcome from './welcome';
import BetaTestRegistration from '../../modules/basic/components/beta-test-registration';
import RoadmapStats from './roadmap-stats';
import MembersList from '../../modules/basic/components/members-list';

export default function HomePage() {
    return (
        <>
            <SWelcomeContainer>
                <Welcome/>
                <RoadmapStats/>
            </SWelcomeContainer>
            <SBox>
                <SRow>
                    <BetaTestRegistration/>
                    <MembersList/>
                </SRow>
            </SBox>
        </>
    );
}

const SWelcomeContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 86px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SBox = styled.div`
  width: 100%;
  min-height: calc(100vh - 14px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;