interface IUseEditor {
    value: any;
    changed: boolean;
    setValue(newValue: any): any;
    setChanged(newValue: boolean): any;
    onChange(key: string, value: any): void;
}
export declare const useEditor: <EditorType>(initialValue: EditorType) => IUseEditor;
export {};
//# sourceMappingURL=useEditor.d.ts.map