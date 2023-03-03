import React from 'react';
import * as S from './styles';
import Modal from '../../../../common/components/modal';
import Button from '../../../../common/components/button';
import {useAppDispatch, useAppSelector} from '../../../../common/store';
import {basicActions} from '../../store';

export default function InstallExtensionNotification() {
    const dispatch = useAppDispatch();
    const isShown = useAppSelector(state => state.basic.isShownNotification);

    const closeModal = () => dispatch(basicActions.changeNotificationStatus(true));

    const link = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';

    return (
        <Modal isOpen={!isShown} onClose={closeModal}>
            <S.Container>
                <h1>metamask extension</h1>
                <p>
                    To work with our application, you have to install the
                    <a target='_blank' href={link}>Metamask browser extension</a>
                </p>
                <Button onClick={closeModal}>Skip this step</Button>
            </S.Container>
        </Modal>
    );
}