import React from 'react';
import styled from 'styled-components';
import Preview from '../../modules/basic/components/preview';
import RoadmapStats from '../../modules/basic/components/roadmap-stats';
import BetaTestRegistration from '../../modules/basic/components/beta-test-registration';
import {useAppSelector} from '../../common/store';
import MembersList from '../../modules/basic/components/members-list';

export default function HomePage() {
    const isFilled = useAppSelector(state => state.basic.userData.isFilled);

    return (
        <SHomePage>
            <section>
                <Preview/>
                <div/>
                <RoadmapStats/>
            </section>
            <section>
                <Alignment>
                    <BetaTestRegistration/>
                    {isFilled && <MembersList/>}
                </Alignment>
            </section>
        </SHomePage>
    );
}

const SHomePage = styled.div`
  width: 100%;

  > section {
    width: 100%;
    height: calc(100vh - 72px);
    max-height: calc(100vh - 72px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Alignment = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;