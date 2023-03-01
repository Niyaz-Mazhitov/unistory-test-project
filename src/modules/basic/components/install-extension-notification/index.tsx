import React, {useState} from 'react';
import * as S from './styles';
import Modal from '../../../../common/components/modal';
import Button from '../../../../common/components/button';

export default function InstallExtensionNotification() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const closeModal = () => setIsOpen(false);

    const link = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';

    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
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