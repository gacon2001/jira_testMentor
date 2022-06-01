import React, { useEffect } from 'react';
import { Container , Typography} from '@mui/material';
import { styled } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux';
import { actGetAllProjectPageApi } from '../_modules/actions';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';

const grey = {
    200: "#E0E3E7",
    800: "#2D3843",
  };
const Root = styled("div")(
    ({ theme }) => `
      table {
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        border-collapse: collapse;
        width: 100%;
      }
    
      td,
      th {
        border: 2px solid ${
          theme.palette.mode === "dark" ? grey[800] : grey[200]
        };
        text-align: left;
        padding: 6px;
      }
    
      thead {
        background-color: pink;
      `
  );

export default function GetAllProjectPage() {
    const listProject = useSelector((state)=> state.reducer.listProject);
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(actGetAllProjectPageApi());
    },[])
    const renderGetAllProjectPage = () => {
        return listProject?.map((project, index) => {
          return (
            <tr key={index}>
              <th>{project.id}</th>
              <th>{project.projectName}</th>
              <th className="d-none d-md-table-cell">{project.categoryName}</th>
              <th className="d-none d-md-table-cell">
              {project.creator.name}</th>
              <th className="d-none d-md-table-cell">
                <BorderColorOutlinedIcon className='button button-edit'/>
                <DeleteSweepOutlinedIcon className='button-delete' />
              </th>
            </tr>
          );
        });
      };
  return (
    <Container maxWidth="md" sx={{mt: 10}}>
      <Typography variant="h4">GetAllProjectPage</Typography>

      <Root sx={{ width: 500, maxWidth: "100%" }}>
        <table aria-label="custom pagination table" className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>ProjectName</th>
              <th className="d-none d-md-table-cell">Category Name</th>
              <th className="d-none d-md-table-cell">Creator </th>
              <th className="d-none d-md-table-cell">Action </th>
            </tr>
          </thead>
          <tbody>
          {renderGetAllProjectPage()}
          </tbody>
        </table>
      </Root>
    </Container>
  )
}
