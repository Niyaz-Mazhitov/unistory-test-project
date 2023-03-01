import React, {ReactNode} from 'react';
import * as S from './styles';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal(props: ModalProps) {
    const {isOpen, onClose, children} = props;

    return (
        <S.ModalWrapper isOpen={isOpen} onClick={onClose}>
            <S.ModalContent onClick={e => e.stopPropagation()}>
                {children}
            </S.ModalContent>
        </S.ModalWrapper>
    );
}