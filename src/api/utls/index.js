import axios from "axios";

export const imageUpload = async (image) => {
    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

    if (!apiKey) {
        console.error("API key is undefined. Check your .env.local file.");
        return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
        const { data } = await axios.post(
            `https://api.imgbb.com/1/upload?key=${apiKey}`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return data.data.display_url;
    } catch (error) {
        console.error("Image upload failed:", error);
        throw error;
    }
};
