import { Tooltip, Fab, Modal,Box, Typography, styled, Avatar } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import {useState} from 'react'
const Add = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const StyledModal = styled(Modal)({
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
  })
  
  const StyledBox = styled(Box)({
    backgroundColor:'white',
    width:'400px',
    height:'280px',
    display:'flex',
    // alignItems:'center',
    // justifyContent:'center',
  }) 

  
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    // alignItems: "center",
    gap: "10px",
  }));
  return (
    <>
      <Tooltip
        onClick={handleOpen}
        sx={{ position: "fixed", bottom: "10px", left: "-7px" }}
        title="Add post"
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
        <StyledModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledBox p={3} borderRadius={5}>
            <Typography variant='h6' color='gray' textAlign='center'>
              Create Post
            </Typography>
            <UserBox>
              <Avatar
                sx={{ width: "30px", height: "30px" }}
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
              />
            <Typography variant="h6">Bruce Lee</Typography>
          </UserBox>
        </StyledBox>
        </StyledModal>
    </>
  );
};

export default Add;
