import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};
  max-width: 300px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 30px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(4)};
`;
