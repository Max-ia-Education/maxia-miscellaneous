export declare const useShow: (defaultVisibility?: boolean) => {
    visible: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
};
export declare const usePhone: (_default?: string) => {
    phone_beautified: string;
    phone: string;
    changeHandler: (e: string) => void;
};
