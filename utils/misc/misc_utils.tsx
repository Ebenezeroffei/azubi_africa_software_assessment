import ErrorEntity from "@@types/entities/ErrorEntity";
import AlertDialogue from "@components/misc/AlertDialogue";
import { api } from "@lib/axios_options";
import axios, { AxiosHeaders } from "@node_modules/axios";
import { isAxiosError } from "@node_modules/axios";
import { getSession, signOut } from "@node_modules/next-auth/react";
import { KeyedMutator } from "@node_modules/swr/dist/_internal";
import { ContextValuesType } from "@providers/ContextProvider";
import { toast } from "react-toastify";


class MiscUtils {
    static generateInputNameAndId = (
        label: string
    ) => {
        const randomNumber = Math.floor(Math.random() * 100000);
        return `${label.trim().replace(' ', '-').toLowerCase()}`;
    }

    static generateRandomNumber = (length: number) => Math.floor(Math.random() * Math.pow(10, length))

    static getSessionData = async () => {
        const session = await getSession()
        return session;
    }

    static evaluateError = async (
        error: any,
        throwException: boolean = false,
    ) => {
        toast.dismiss();
        if (isAxiosError(error)) {
            const errorResponse = error.response;
            const errorData: ErrorEntity = errorResponse?.data;
            // Token has expired
            const tokenExpiryMessage = 'Token is expired'
            if (errorResponse?.status === axios.HttpStatusCode.Unauthorized && errorData.errors['detail'] === tokenExpiryMessage) {
                toast.info("Token has expired.");
                await signOut();
            }
            else {
                const errorMessages: string[] = []
                Object.keys(errorData.errors).forEach(errorKey => {
                    const errorMessage = errorKey === 'detail'
                        ? errorData.errors[errorKey]
                        : `${MiscUtils.capitalize(errorKey)} : ${errorData.errors[errorKey]}`

                    if (!throwException) {
                        toast.error(errorMessage)
                    }
                    errorMessages.push(errorMessage)
                })
                if (throwException) {
                    throw new Error(errorMessages.join('; '));
                }
            }
        }
        else {
            error as Error;
            toast.error(String(error))
        }
    }

    static capitalize = (text: string) => {
        const words = text.trim().split(' ');
        let result = "";
        words.forEach(word => {
            result += `${word[0].toUpperCase()}${word.substring(1,)}`
        });
        return result;
    }

    static generateHeaders = async (): Promise<AxiosHeaders> => {
        const session = await MiscUtils.getSessionData();
        const headers = new AxiosHeaders();
        headers.set('Authorization', `Bearer ${session?.access}`);
        headers.set('X-Restaurant-Id', session?.restaurant.id);
        return headers;
    }

    static checkNetworkStatus = async () => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_URL}network-status/`;
            await axios.get(url);
            return true
        }
        catch {
            toast.info("No internet connection.")
            return false;
        }
    }

    static getData = async <T,>(
        url: string,
        throwException: boolean = true,
    ) => {
        const hasInternet = await MiscUtils.checkNetworkStatus();
        if (hasInternet) {
            try {
                const headers = await MiscUtils.generateHeaders();
                const res = await api.get(url, {
                    headers,
                })
                return res.data as T;
            }
            catch (err) {
                await MiscUtils.evaluateError(err, throwException);
            }
        }

    }

    static showConfirmDialogue = (
        contextValues: ContextValuesType,
        modalTitle: string,
        modalContent: string,
        onYesResponseHandler: () => {}
    ) => {
        const { setModalTitle, setModalContent, setShowSmallModal } = contextValues;
        setModalTitle(_ => modalTitle);
        setModalContent(_ =>
            <AlertDialogue
                onYesResponseHandler={onYesResponseHandler}
                content={modalContent}
            />
        );
        setShowSmallModal(_ => true);
    }

    static deleteItemMutate = async <T,>(
        url: string,
        mutate: KeyedMutator<T | undefined>,
    ) => {
        try {
            const hasInternet = await MiscUtils.checkNetworkStatus();
            if (hasInternet) {
                toast.loading("Deleting item");
                const headers = await MiscUtils.generateHeaders();
                await api.delete(url, { headers })
                mutate();
                toast.dismiss()
                toast.success("Item deleted")
            }
        }
        catch (err) {
            await MiscUtils.evaluateError(err);
        }
    }

    static resolveFilename = (url: string) => {
        const urlSplit = url.split('/')
        return urlSplit[urlSplit.length - 1];
    }

    static generateFilenameUrl = (url: string) => {
        return `${process.env.NEXT_PUBLIC_BASE_URL}${url}`
    }

    static debounce = (
        inputId: string,
        onDebounceHandler: () => void,
        delay: number = 350,
    ) => {
        let timeout: NodeJS.Timeout;

        document.getElementById(inputId)?.addEventListener("keyup", () => {
            clearTimeout(timeout); // Clear previous timeout
            timeout = setTimeout(onDebounceHandler, delay)
        });
    }

    static getValueByKeyPath = (obj: any, keyPath: string) => {
        return keyPath.split('.').reduce((acc, key) => acc?.[key], obj);
    };

    static appendQueryString = (
        url: string,
        key: string,
        value: string,
    ) => {
        const urlLst = url.split('?')
        if (urlLst.length == 2 && urlLst[1]) {
            return `${url}&${key}=${value}`
        }
        return `${url}?${key}=${value}`
    }
}

export default MiscUtils;