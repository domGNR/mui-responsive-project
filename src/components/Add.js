import { Tooltip,Fab } from "@mui/material";
import {Add as AddIcon} from '@mui/icons-material'
const Add = () => {
  return (
    <>
      <Tooltip
      sx={{position:'fixed',bottom:'10px',left:'-7px'}}
      title="Add post">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;
