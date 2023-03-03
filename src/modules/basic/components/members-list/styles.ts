import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 76vh;
  display: flex;
  flex-direction: column;
  gap: 35px;

  h1 {
    font-size: 36px;
    font-family: ${props => props.theme.fontFamily.primary};
    letter-spacing: 1px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #ffffff;
    border: 4.5px solid ${props => props.theme.background.default};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${props => props.theme.background.secondary};
  }
`;

export const Table = styled.table`
  width: 100%;
  padding-right: 27px;

  a {
    color: ${props => props.theme.color.default};
    text-decoration: none;
  }

  th {
    text-align: left;
    font-size: 24px;
    font-family: ${props => props.theme.fontFamily.primary};
    padding-bottom: 16px;
  }

  td {
    padding: 16px 0;
    font-size: 14px;
    font-family: ${props => props.theme.fontFamily.secondary};
    border-top: 1px solid #ffffff;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;

      span {
        margin: 0 8px;
        color: ${props => props.theme.color.default};
        cursor: pointer;

        &:hover {
          color: ${props => props.theme.color.primary};
        }
      }
    }
  }
`;

export const Tr = styled.tr<{ active?: boolean; disabledHover?: boolean }>`
  ${props => props.active && css`
    color: ${props => props.theme.color.primary};
  `}

  ${props => !props.disabledHover && css`
    &:hover {
      * {
        color: ${props => props.theme.color.primary};
        
        span {
          color: ${props => props.theme.color.default};
        }
      }
    }
  `}
`;