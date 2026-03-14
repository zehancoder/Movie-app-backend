import { getMe } from "../apiLayers/auth.api";

export const getCurrentLogin = async () => {
    const response = await getMe();
    if (!response.success) {
        return { success: false, message: response.message };
    }
    return {
        success: true,
        message: 'Success',
        data: response.data.user
    }
}
