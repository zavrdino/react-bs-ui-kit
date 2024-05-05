import { useState } from 'react'

interface IUseEditor {
    value: any,
    changed: boolean,
    setValue(newValue: any): any,
    setChanged(newValue: boolean): any,
    onChange(key: string, value: any): void,
}

export const useEditor = <EditorType>(initialValue: EditorType): IUseEditor => {
    const [editingObject, setEditingObject] = useState<EditorType>(initialValue)
    const [changed, setChanged] = useState<boolean>(false)

    const onChange = (key: string, value: any): void => {
        setEditingObject({
            ...editingObject,
            [key]: value
        })
        setChanged(true);
    }

    return {
        value: editingObject as EditorType,
        setValue: setEditingObject,
        setChanged,
        changed,
        onChange,
    }
}
