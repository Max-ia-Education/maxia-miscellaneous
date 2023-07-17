export declare const formatName: (name: string | undefined | null) => string;
export declare const normalizeName: (name: string) => string;
export declare function sliceObject<T extends Object>(data: T, keys: (keyof T)[]): Partial<T>;
export declare function formatDate(dateString: string | undefined | null, type: 'date' | 'time' | 'datetime'): string;
export declare const formatMes: (mes: number) => string;
export declare function unique<T>(list: T[]): T[];
export declare function uniqueObject<T>(arr: T[]): T[];
export declare const fuzzyStringMatcher: (typed: string, matches: string[]) => boolean;
export declare const mathMean: (arr: (number | undefined | null)[], round?: boolean) => number;