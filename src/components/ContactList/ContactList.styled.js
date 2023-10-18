import styled from 'styled-components';

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(4)};
`;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
`;
export const ContactNumber = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(6)};
  align-items: center;
`;
