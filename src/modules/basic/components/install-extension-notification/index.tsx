import React, {useState} from 'react';
import * as S from './styles';
import Modal from '../../../../common/components/modal';
import Button from '../../../../common/components/button';

export default function InstallExtensionNotification() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const closeModal = () => setIsOpen(false);

    const link = 'https://metamask.io/download/';

    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <S.Container>
                <h1>metamask extension</h1>
                <p>
                    To work with our application, you have to install the
                    <a href={link}>Metamask browser extension</a>
                </p>
                <Button onClick={closeModal}><h1>Skip this step</h1></Button>
            </S.Container>
        </Modal>
    );
}