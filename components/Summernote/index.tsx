import React, { forwardRef, useEffect } from "react";
import ReactSummernote from "./ReactSummernote";
import './styles.css'

export const Summernote = forwardRef(function Summernote(
  { name, className = '', setValue, error, defaultValue, placeholder, noteEditorClass = 'item-design' }: React.HTMLProps<HTMLInputElement> &
  { setValue?: (text: string) => void, error?: string | null, noteEditorClass?: string },
  ref
) {
  useEffect(() => {
    $('.note-editing-area').addClass(noteEditorClass)
  }, [])

  return (
    <>
      <div className={className + (error ? ' error' : '')}>
        <ReactSummernote ref={ref as any}
          name={name} placeholder={placeholder}
          onChange={setValue}
          value={String(defaultValue)}
          options={(window as any).summernoteOptions}
        />

      </div>

      <div className="red fw-500">{error}</div>
    </>
  )
})
