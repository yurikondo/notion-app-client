import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import notionLogo from "../../assets/images/notion-logo.png";
import authUtils from "../../utils/authUtils";
import Sidebar from "../common/Sidebar";

const AppLayout = () => {
  const navigate = useNavigate();

  //ページ遷移するたびに起動
  //ローカルストレージにトークンが入っているか（ログインしているか）チェック
  useEffect(() => {
    const checkAuth = async () => {
      //認証チェック
      const user = await authUtils.isAuthenticated();
      if (!user) {
        navigate("/login");
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, p: 1, width: "max-content" }}>
          {/* Homeコンポーネントを表示 */}
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default AppLayout;
