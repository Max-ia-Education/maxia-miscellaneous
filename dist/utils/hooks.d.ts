export declare const useShow: (defaultVisibility?: boolean) => {
    visible: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
};
type TUseLink = {
    validacaoDisciplina?: boolean;
    roteiro_estudos?: boolean;
    route: string[];
};
export declare function useLink({ validacaoDisciplina, route }: TUseLink): string;
export declare const usePhone: (defaultValue?: string) => {
    phone_beautified: string;
    phone: string;
    changeHandler: (e: string) => void;
};
export {};
