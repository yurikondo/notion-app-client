import React, { useEffect } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined";
import assets from "../../assets/index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import memoApi from "../../api/memoApi";

const Sidebar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const getMemos = async () => {
      try {
        const res = await memoApi.getAll();
        console.log(res);
      } catch (err) {
        alert(err);
      }
    };
    getMemos();
  }, []);

  return (
    /* https://mui.com/material-ui/react-drawer/ */
    /* open={true}は常に表示 */
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{ width: 250, height: "100vh" }}
    >
      <List
        sx={{
          width: 250,
          height: "100vh",
          backgroundColor: assets.colors.secondary,
        }}
      >
        <ListItemButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" fontWeight="700">
              {user.username}
            </Typography>
            <IconButton onClick={logout}>
              <LogoutOutlined />
            </IconButton>
          </Box>
        </ListItemButton>
        <Box sx={{ paddingTop: "10px" }}></Box>
        <ListItemButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" fontWeight="700">
              お気に入り
            </Typography>
          </Box>
        </ListItemButton>
        <Box sx={{ paddingTop: "10px" }}></Box>
        <ListItemButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" fontWeight="700">
              プライベート
            </Typography>
            <IconButton>
              <AddBoxOutlined fontSize="small" />
            </IconButton>
          </Box>
        </ListItemButton>
        <ListItemButton>
          <Typography
            sx={{ pl: "20px", textDecoration: "none" }}
            component={Link}
            to="memo/dfgsdgsg"
          >
            📝仮のメモ
          </Typography>
        </ListItemButton>
        <ListItemButton>
          <Typography
            sx={{ pl: "20px", textDecoration: "none" }}
            component={Link}
            to="memo/dfgsdgsg"
          >
            📝仮のメモ
          </Typography>
        </ListItemButton>{" "}
        <ListItemButton>
          <Typography sx={{ pl: "20px" }} component={Link} to="memo/dfgsdgsg">
            📝仮のメモ
          </Typography>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
