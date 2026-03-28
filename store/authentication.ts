import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const token = ref<string>(localStorage.getItem("userToken") || "");
  const user = ref<object>({});

  // This ensures token is sent in headers with every request
  const setAuthToken = (authToken: string) => {
    token.value = authToken;
    localStorage.setItem("userToken", authToken);
  
    globalThis.$fetch = $fetch.create({
      baseURL: useRuntimeConfig().public.baseURL as string,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  };

  const setAuthUser = (userData: object) => {
    user.value = userData;
  };

  const logout = () => {
    const router = useRouter();
    user.value = {};
    token.value = "";
    localStorage.removeItem("userToken");

    // Remove token from fetch headers if needed
    globalThis.$fetch = $fetch.create({
      baseURL: (useRuntimeConfig().public.baseURL as string),
    });

    router.push("/");
  };

  return { setAuthToken, setAuthUser, token, logout };
});