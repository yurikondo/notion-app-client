import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import notionLogo from "../../assets/images/notion-logo.png";

const AuthLayout = () => {
  return (
    <div>
      {/* "component"プロパティに設定された値は、Material UIのコンポーネントのHTML要素を指定するために使用されます。 */}
      <Container conponent="main" max-wide="xs">
        {/* div要素のようなブロック要素を表現するための汎用的なコンテナー */}
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* JSX記法↓ */}
          <img
            src={notionLogo}
            alt="Logo"
            style={{ width: 100, height: 100, marginBottom: 3 }}
          />
          Notionクローン
        </Box>
        <Outlet />
      </Container>
    </div>
  );
};

export default AuthLayout;
