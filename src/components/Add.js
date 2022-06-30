import {
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  Button
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from "react";
const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
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
        <Box width={400} height={250} p={3} bgcolor="white" borderRadius={5}  bgcolor={'background.default'} color={'text.primary'}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox mb={2}>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
            />
            <Typography fontWeight={500} variant="span">
              Bruce Lee
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%"}}
            multiline
            rows={3}
            placeholder="Default Value"
            variant="standard"
          />
          <Stack spacing={2} direction='row' mt={2} mb={2}>
            <EmojiEmotionsIcon />
            <EmojiEmotionsIcon />
            <EmojiEmotionsIcon />
          </Stack>
          <Button variant="contained" sx={{width:'100%'}}>POST</Button>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
