"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/common/Input";
import { Checkbox } from "@/components/common/Checkbox";
import Button from "@/components/common/Button";
import { useToast } from "@/hooks/useToast";
import { useRegisterForm, type RegisterFormData } from "@/hooks/useAuthForm";
import { register as registerUser } from "@/api/auth.service";
import AuthLayout from "@/layouts/AuthLayout";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const toast = useToast();
    const { login: loginUser, setLoading } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useRegisterForm();

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);
        setLoading(true);

        try {
            const response = await registerUser({
                username: data.username,
                email: data.email,
                password: data.password,
            });

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

                toast.success(response.data.message || "Đăng ký thành công!");

                // Reset form
                reset();

                // Redirect to chat page
                router.push("/chat");
            } else {
                toast.error(response.data.message || "Đăng ký thất bại");
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Đăng ký"
            subtitle="Tạo tài khoản mới để bắt đầu trải nghiệm"
            footerText="Đã có tài khoản?"
            footerLink="/auth/login"
            footerLinkText="Đăng nhập"
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
                    transition={{ delay: 0.1 }}
                >
                    <Input
                        label="Tên đăng nhập"
                        type="text"
                        floatingLabel
                        error={errors.username?.message}
                        variant={errors.username ? "error" : "default"}
                        {...register("username")}
                        required
                    />

                    <Input
                        label="Email"
                        type="email"
                        floatingLabel
                        error={errors.email?.message}
                        variant={errors.email ? "error" : "default"}
                        {...register("email")}
                        required
                    />

                    <Input
                        label="Mật khẩu"
                        type="password"
                        floatingLabel
                        error={errors.password?.message}
                        variant={errors.password ? "error" : "default"}
                        {...register("password")}
                        required
                    />

                    <Input
                        label="Xác nhận mật khẩu"
                        type="password"
                        floatingLabel
                        error={errors.confirmPassword?.message}
                        variant={errors.confirmPassword ? "error" : "default"}
                        {...register("confirmPassword")}
                        required
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Checkbox
                        label="Tôi đồng ý với điều khoản và điều kiện"
                        description="Bằng cách đăng ký, bạn đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của chúng tôi"
                        {...register("agreeToTerms")}
                        variant="primary"
                    />
                    {errors.agreeToTerms && (
                        <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                            {errors.agreeToTerms.message}
                        </p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Button
                        type="submit"
                        isLoading={isLoading}
                        variant="gradient"
                        size="lg"
                        className="w-full"
                    >
                        Đăng ký
                    </Button>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                            Hoặc đăng ký với
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
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