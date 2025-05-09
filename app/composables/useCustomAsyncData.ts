export const useCustomAsyncData = async (
    cacheKey: string,
    url: string,
) => {
    const response = await useAsyncData(cacheKey, () =>
        $fetch(`${useRuntimeConfig().public.baseUrl}/${url}`),
    );

    return response.data?.value;
};
