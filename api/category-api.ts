import type { AxiosRequestConfig } from "axios";
import Api from ".";

const axiosInstance = new Api({
    baseURL: process.env.API_BASE_URL_v1,
});

interface Pagination {
    page: number;
    limit: number;
}

export const fetchCategories = async ({
    pagination,
    sort,
}: {
    pagination: Pagination;
    sort: string;
}) => {
    let url = "/general/categories";
    let params: AxiosRequestConfig["params"] = {
        page: pagination.page || 1,
        limit: pagination?.limit || 20,
     
    };

    try {
        const response = await axiosInstance.get(url, {
            ...params,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching tickets:", error);
        throw error;
    }
};




const getById = async (url: string, id: string | null) => {
    if (!id) return undefined;
    try {
        const response = await axiosInstance.get(url + id);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
    }
};

const getCategories = async (url: string) => {
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
    }
};

const putById = async (url: string, id: string | null, data: any) => {
    if (!id) return undefined;
    try {
        const response = await axiosInstance.put(url + id, data);
        return response.data;
    } catch (error) {
        console.error(`Error put data from ${url}:`, error);
        throw error;
    }
};

export const getTicketById = async (id: string | null) =>
    getById("/tickets/", id + "/order");
export const updateTicketById = async (
    id: string | null,
    data: any
) => putById("/tickets/", id, data);
export const getTicketSummary = async (id: string | null) =>
    getById(`/tickets/summary/`, id);
export const getTicketCategories = async () =>
    getCategories("/ticket/category");

export const addComment = async (data: any) => {
    try {
        const response = await axiosInstance.post(
            "/tickets/message",
            data
        );
        return response.data;
    } catch (error) {
        console.error("Error adding ticket comment:", error);
        throw error;
    }
};

export const contentById = async (id: string) => {
    if (!id) return undefined;
    try {
        const response = await axiosInstance.get("/ticket/content/" + id);
        return response.data;
    } catch (error) {
        console.error(`Error put data from ticket content`, error);
        throw error;
    }
};

export const updateContent = async (id: string, data: any) => {
    if (!id) return undefined;
    try {
        const response = await axiosInstance.put(
            "/ticket/content/" + id,
            data
        );
        return response.data;
    } catch (error) {
        console.error(`Error put data from ticket content`, error);
        throw error;
    }
};

export const newTicket = async (data: any) => {
    try {
        const response = await axiosInstance.post(
            "/tickets/create",
            data
        );
        return response.data;
    } catch (error) {
        console.error("Error adding ticket comment:", error);
        throw error;
    }
};

export const syncTicket = async (id: string) => {
    try {
        const response = await axiosInstance.get(
            `syncs/ticket/by/sequence/${id}`
        );
        return response.data;
    } catch (error) {
        console.error("Error sync ticket:", error);
        throw error;
    }
};
