import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  align-items: flex-start;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: center;
    flex: none;
  }
`;

export const AccountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: 1rem;
  font-weight: 600;

  .account-icon {
    margin-left: 0.5rem;
  }
  @media ${({ theme }) => theme.media.tablet} {
    .account-icon {
      margin-left: 0.25rem;
    }
  }
  @media ${({ theme }) => theme.media.phone} {
    margin-left: 0.25rem;
  }
`;

export const ModalContentWrapper = styled.div``;
