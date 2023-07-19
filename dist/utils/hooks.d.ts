export declare const useShow: (defaultVisibility?: boolean) => {
    visible: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
};
export declare function useLink({ validacaoDisciplina, params }: {
    validacaoDisciplina?: boolean;
    roteiro_estudos?: boolean;
    params: string[];
}): string;
export declare const usePhone: (defaultValue?: string) => {
    phone_beautified: string;
    phone: string;
    changeHandler: (e: string) => void;
};
