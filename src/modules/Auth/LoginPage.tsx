"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TextInput } from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useToast } from "@/hooks/useToast";
import { useLoginForm, type LoginFormData } from "@/hooks/useAuthForm";
import { login } from "@/api/auth.service";
import AuthLayout from "@/layouts/AuthLayout";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  const toast = useToast();
  const { login: loginUser, setLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useLoginForm();

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setLoading(true);

    try {
      const response = await login(data);

      if (response.data.success) {
        const { user, accessToken, refreshToken, tokenType } = response.data.data;

        // Store in Zustand store
        loginUser(user, {
          accessToken,
          refreshToken,
          tokenType,
        });

        // Also store in localStorage for backward compatibility
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(user));

        toast.success(response.data.message || "Đăng nhập thành công!");

        // Reset form
        reset();

        // Check for redirect parameter from middleware
        const urlParams = new URLSearchParams(window.location.search);
        const redirect = urlParams.get('redirect');

        // Redirect to original destination or default to chat
        router.push(redirect || "/chat");
      } else {
        toast.error(response.data.message || "Đăng nhập thất bại");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Đăng nhập thất bại. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Đăng nhập"
      subtitle="Chào mừng bạn trở lại! Vui lòng đăng nhập để tiếp tục."
      footerText="Chưa có tài khoản?"
      footerLink="/auth/register"
      footerLinkText="Đăng ký ngay"
    >
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <TextInput
            label="Tên đăng nhập hoặc Email"
            type="text"
            floatingLabel
            error={errors.usernameOrEmail?.message}
            variant={errors.usernameOrEmail ? "error" : "default"}
            {...register("usernameOrEmail")}
            required
          />

          <TextInput
            label="Mật khẩu"
            type="password"
            floatingLabel
            error={errors.password?.message}
            variant={errors.password ? "error" : "default"}
            {...register("password")}
            required
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span>Ghi nhớ đăng nhập</span>
          </label>
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Quên mật khẩu?
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            type="submit"
            isLoading={isLoading}
            variant="gradient"
            size="lg"
            className="w-full"
          >
            Đăng nhập
          </Button>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
              Hoặc đăng nhập với
            </span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            type="button"
            variant="outline"
            size="md"
            className="w-full"
          >
            Google
          </Button>
          <Button
            type="button"
            variant="outline"
            size="md"
            className="w-full"
          >
            Twitter
          </Button>
        </motion.div>

      </motion.form>
    </AuthLayout>
  );
}