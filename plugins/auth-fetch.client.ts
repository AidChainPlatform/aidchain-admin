export default defineNuxtPlugin((nuxtApp) => {
    const token = localStorage.getItem("userToken");
  
    // Only override $fetch if we have a token
    if (token) {
      nuxtApp.$fetch = $fetch.create({
        baseURL: (useRuntimeConfig().public.baseURL as string),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  });