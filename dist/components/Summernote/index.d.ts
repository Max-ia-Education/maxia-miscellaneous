import React from "react";
import './styles.css';
export declare const Summernote: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLInputElement> & {
    setValue?: (text: string) => void;
    error?: string | null;
    noteEditorClass?: string;
}, "ref"> & React.RefAttributes<unknown>>;
