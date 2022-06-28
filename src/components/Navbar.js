import {
  Box,
  AppBar,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import {Apartment,Mail,Notifications} from "@mui/icons-material/";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled("div")(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Empire
        </Typography>
        <Apartment sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Avatar
            onClick={() => handleOpen()}
            sx={{ width: "30px", height: "30px" }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="action" />
          </Badge>
        </Icons>
        <UserBox
         onClick={() => handleOpen()}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
          <Typography variant="h6">Bruce Lee</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
