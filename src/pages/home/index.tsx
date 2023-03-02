import React from 'react';
import styled from 'styled-components';
import Welcome from './welcome';
import BetaTestRegistration from '../../modules/basic/components/beta-test-registration';
import RoadmapStats from './roadmap-stats';

export default function HomePage() {
    return (
        <>
            <SBox>
                <Welcome/>
                <RoadmapStats/>
            </SBox>
            <SBox>
                <BetaTestRegistration/>
            </SBox>
        </>
    );
}
const SBox = styled.div`
  width: 100%;
  height: calc(100vh - 86px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;