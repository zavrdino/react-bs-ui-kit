import React from 'react';
import { Colors } from '../../enum/Colors';
export interface ISelectOptions {
    caption: string;
    value: any;
}
export interface IInputSpecs {
    type?: 'boolean' | 'textarea' | 'select' | 'number' | 'search' | 'decimal' | 'int' | 'float' | 'text' | 'email' | 'date' | 'password' | 'eval' | 'tel' | 'url' | 'time';
    key?: string;
    caption?: string;
    default?: string | number;
    description?: string;
    maxLength?: number;
    options?: ISelectOptions[];
    min?: any;
    max?: any;
    rows?: number;
    step?: number;
}
export interface IComponentProps {
    value: any;
    testId?: string;
    size?: 'sm' | 'md' | 'lg';
    name: string | undefined;
    specs?: IInputSpecs;
    disabled?: boolean;
    onChange?: any;
    readOnly?: boolean;
    icon?: string;
    labelColor?: Colors;
    autocomplete?: string;
    onEnterKeyPressed?(): void;
    onEscKeyPressed?(): void;
    placeholder?: string;
}
export interface IEvent {
    _reactName: string;
    _targetInst: any;
    altKey: boolean;
    bubbles: boolean;
    cancelable: boolean;
    charCode: number;
    code: string;
    ctrlKey: boolean;
    currentTarget: any;
    defaultPrevented: boolean;
    detail: number;
    eventPhase: number;
    getModifierState: any;
    isDefaultPrevented: any;
    isPropagationStopped: any;
    isTrusted: boolean;
    key: string;
    keyCode: number;
    locale: any;
    location: number;
    metaKey: boolean;
    nativeEvent: number;
    repeat: boolean;
    shiftKey: boolean;
    target: any;
    timeStamp: number;
    type: string;
    view: Window;
    which: number;
}
export declare const Input: ({ name, icon, size, specs, value, testId, onChange, readOnly, disabled, placeholder, autocomplete, onEscKeyPressed, onEnterKeyPressed, labelColor, }: IComponentProps) => React.JSX.Element;
//# sourceMappingURL=Input.d.ts.map