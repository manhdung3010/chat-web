import { toast } from "sonner";

export const useToast = () => {
  const success = (
    message: string,
    options?: { description?: string; duration?: number }
  ) => {
    return toast.success(message, {
      description: options?.description,
      duration: options?.duration || 4000,
    });
  };

  const error = (
    message: string,
    options?: { description?: string; duration?: number }
  ) => {
    return toast.error(message, {
      description: options?.description,
      duration: options?.duration || 5000,
    });
  };

  const info = (
    message: string,
    options?: { description?: string; duration?: number }
  ) => {
    return toast.info(message, {
      description: options?.description,
      duration: options?.duration || 4000,
    });
  };

  const warning = (
    message: string,
    options?: { description?: string; duration?: number }
  ) => {
    return toast.warning(message, {
      description: options?.description,
      duration: options?.duration || 4000,
    });
  };

  const loading = (message: string, options?: { description?: string }) => {
    return toast.loading(message, {
      description: options?.description,
    });
  };

  const dismiss = (toastId?: string | number) => {
    if (toastId) {
      toast.dismiss(toastId);
    } else {
      toast.dismiss();
    }
  };

  const promise = <T>(
    promise: Promise<T>,
    {
      loading,
      success,
      error,
    }: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: Error) => string);
    }
  ) => {
    return toast.promise(promise, {
      loading,
      success,
      error,
    });
  };

  return {
    success,
    error,
    info,
    warning,
    loading,
    dismiss,
    promise,
  };
};
