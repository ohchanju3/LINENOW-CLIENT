import { getBlackUser } from "@apis/domains/user/getBlackUser";
import { postAuthenticate } from "@apis/domains/user/postAuthenticate";
import { postLogin } from "@apis/domains/user/postLogin";
import { postLogout } from "@apis/domains/user/postLogout";
import { postRegistration } from "@apis/domains/user/postRegistration";
import { postRegistrationMessage } from "@apis/domains/user/postRegistrationMessage";
import { deleteWithdraw } from "@apis/domains/user/postWithdraw";
import { ROUTE } from "@constants/route";
import useAuth from "@hooks/useAuth";
import { useToast } from "@linenow/core/hooks";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetBlackuser = () => {
  return useQuery({
    queryKey: ["black_user"],
    queryFn: () => getBlackUser(),
  });
};

export const usePostLogin = () => {
  type Parameter = {
    phonenumber: string;
    password: string;
  };

  const { login } = useAuth();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (params: Parameter) =>
      postLogin({
        user_phone: params.phonenumber,
        user_password: params.password,
      }),
    onSuccess: (data) => {
      if (data != null) login({ accessToken: data.accessToken });
    },
  });
};

export const usePostAuthenticate = () => {
  const { login } = useAuth();
  const { presentToast } = useToast();
  type Prameter = {
    phonenumber: string;
    smsCode: string;
  };

  return useMutation({
    mutationKey: ["authenticate"],
    mutationFn: (params: Prameter) =>
      postAuthenticate({
        user_phone: params.phonenumber,
        sms_code: params.smsCode,
      }),
    onSuccess: (response) => {
      presentToast("로그인을 성공했어요!");
      if (response) login({ accessToken: response?.accessToken });
    },
    onError: (error) => {
      const e = error as any;
      const isUser = e.data.data[0].is_signup;

      if (isUser === false) throw new Error("IS_GUEST");
      else alert("올바르지 않은 인증번호입니다.");
    },
  });
};

// 회원가입
export const usePostRegistration = () => {
  const { login } = useAuth();
  const { presentToast } = useToast();
  type Prameter = {
    name: string;
    phonenumber: string;
  };

  return useMutation({
    mutationKey: ["registration"],
    mutationFn: (params: Prameter) =>
      postRegistration({
        user_name: params.name,
        user_phone: params.phonenumber,
      }),
    onSuccess: (response) => {
      presentToast("회원가입을 성공했어요!");
      if (response) login({ accessToken: response?.accessToken });
    },
    onError: (error) => {
      const axiosError = error as AxiosError;
      if (axiosError.status === 400) alert("인증번호가 올바르지 않습니다!");
    },
  });
};

export const usePostRegistrationMessage = () => {
  const { presentToast } = useToast();
  const presentCompletedSendingToast = () => {
    presentToast("인증 번호가 전송되었어요!");
  };

  return useMutation({
    mutationKey: ["registration_message"],
    mutationFn: (phonenumber: string) =>
      postRegistrationMessage({
        user_phone: phonenumber,
      }),
    onSuccess: () => presentCompletedSendingToast(),
    onError: (error) => {
      const axiosError = error as AxiosError;
      if (axiosError.status === 400) alert("이미 가입된 전화번호입니다!");
    },
  });
};

export const usePostLogout = () => {
  const { logout } = useAuth();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => postLogout(),
    onSuccess: () => {
      logout();
      window.location.href = ROUTE.DEFAULT;
    },
  });
};

export const usePostWithdraw = () => {
  const { logout } = useAuth();
  return useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => deleteWithdraw(),
    onSuccess: () => {
      logout();
      window.location.href = ROUTE.DEFAULT;
    },
  });
};
