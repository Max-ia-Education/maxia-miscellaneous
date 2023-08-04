export declare const useShow: (defaultVisibility?: boolean) => {
    visible: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
};
type TUseLinkObject = {
    validacaoDisciplina?: boolean;
    roteiro_estudos?: boolean;
    route: string[];
};
type TUseLink = TUseLinkObject | string[];
export declare function useLink(params: TUseLink): string;
export declare const usePhone: (defaultValue?: string) => {
    phone_beautified: string;
    phone: string;
    changeHandler: (e: string) => void;
};
export declare const useCountdownTimer: (t_0: number) => number;
export {};
