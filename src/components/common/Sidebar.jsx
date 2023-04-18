import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";

const Sidebar = () => {
  return (
    /* https://mui.com/material-ui/react-drawer/ */
    /* open={true}は常に表示 */
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{ width: 250, height: "100vh" }}
    >
      <List sx={{ width: 250, height: "100vh" }}>
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
              ゆり🎉
            </Typography>
            <IconButton>
              <LogoutOutlined />
            </IconButton>
          </Box>
        </ListItemButton>
      </List>
      kkkk
    </Drawer>
  );
};

export default Sidebar;
