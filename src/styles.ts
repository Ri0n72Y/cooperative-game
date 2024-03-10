import styled from "@emotion/styled";
import { DataGrid } from "@mui/x-data-grid";

export const Container = styled.div`
  padding: 18px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid #6a6a6a;
  outline: none;
  background: #fff;
  color: #6a6a6a;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const StyledDataGrid = styled(DataGrid)`
  .MuiDataGrid-columnHeaderTitle {
    font-weight: 600;
  }
  .MuiDataGrid-cellContent {
    padding: 12px 0;
    white-space: pre-wrap !important;
    word-wrap: break-word !important;
  }
`;
