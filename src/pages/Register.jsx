import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
import authApi from "../api/authApi";

const Register = () => {
  const [usernameErrText, setUsernameErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState("");

  //フォームから入力されたデータを取得するための処理
  const handleSubmit = async (e) => {
    setUsernameErrText("");
    setPasswordErrText("");
    setConfirmPasswordErrText("");

    //デフォルトのフォーム送信動作をキャンセル
    e.preventDefault();
    //フォームの文字列を取得(FormDataクラスを使用)
    const data = new FormData(e.target);

    //textFieldのname属性で指定
    const username = data.get("username").trim();
    const password = data.get("password").trim();
    const confirmPassword = data.get("confirmPassword").trim();
    console.log(username);
    console.log(password);
    console.log(confirmPassword);

    let error = false;

    if (username === "") {
      error = true;
      setUsernameErrText("名前を入力してください");
    }
    if (password === "") {
      error = true;
      setPasswordErrText("パスワードを入力してください");
    }
    if (confirmPassword === "") {
      error = true;
      setConfirmPasswordErrText("確認用パスワードを入力してください");
    }
    if (confirmPassword !== password) {
      error = true;
      setConfirmPasswordErrText("パスワードと確認用パスワードが異なります");
    }

    if (error) return;

    //ユーザー新規登録API
    try {
      const res = await authApi.register({
        username,
        password,
        confirmPassword,
      });
      //ローカルストレージにトークンを保存
      localStorage.setItem("token", res.token);
      console.log("ユーザー新規登録に成功しました🎉");
    } catch (err) {
      console.log(`エラー👉${err}`);
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          id="username"
          label="お名前"
          margin="normal"
          name="username"
          required
          helperText={usernameErrText}
        />
        <TextField
          fullWidth
          id="password"
          label="パスワード"
          margin="normal"
          name="password"
          type="password"
          required
          helperText={passwordErrText}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          label="確認用パスワード"
          margin="normal"
          name="confirmPassword"
          type="password"
          required
          helperText={confirmPasswordErrText}
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          fullWidth
          type="submit"
          loading={false}
          color="primary"
          variant="outlined"
        >
          アカウント作成
        </LoadingButton>
      </Box>
      {/* react-router-domのLink */}
      <Button component={Link} to="/login">
        すでにアカウントを持っていますか？ログイン
      </Button>
    </>
  );
};

export default Register;
