import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
  max-width: 300px;
  padding: 30px;
  border: 1px solid grey;
  border-radius: 8px;
`;
