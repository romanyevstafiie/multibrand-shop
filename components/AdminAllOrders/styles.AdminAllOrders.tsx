import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Filter = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.dashboardGrayCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 2rem;
  width: 100%;
  gap: 1rem;
`;

export const Order = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.dashboardGrayCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 2rem;
  width: 100%;

  .more__details {
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondaryGolden};
  }
`;

export const StatWrapper = styled.div`
  display: flex;
  align-items: center;
  .icon {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primaryGolden};
  }
`;
