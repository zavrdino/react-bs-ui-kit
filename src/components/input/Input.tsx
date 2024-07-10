import React, { useState, useRef, EventHandler } from 'react';
import { MaterialIcon } from '../material-icon/MaterialIcon';
import { Popup } from '../popup/Popup';
import { Colors } from '../../enum/Colors';
import { BaseComponent } from '../BaseComponent';
import { TimeInput } from './components/time-input/TimeInput';
import { TouchableOpacity } from '../touchable-opacity';

export interface ISelectOptions {
   caption: string,
   value: any, 
}

export interface IInputSpecs {
    type?: 'boolean' | 'textarea' | 'select' | 'number' | 'search' | 'decimal' | 'int' | 'float' | 'text' | 'email' | 'date' | 'password' | 'eval' | 'tel' | 'url' | 'time' | 'color',
    key?: string,
    caption?: string,
    default?: string | number,
    description?: string,
    maxLength?: number,
    options?: ISelectOptions[],
    min?: any,
    max?: any,
    rows?: number,
    step?: number,
}

export interface IComponentProps {
    value: any,
    testId?: string,
    size?: 'sm' | 'md' | 'lg',
    name: string | undefined,
    specs?: IInputSpecs,
    disabled?: boolean,
    onChange?: any,
    readOnly?: boolean,
    icon?: string,
    labelColor?: Colors,
    autocomplete?: string,
    onReset?: any,
    onEnterKeyPressed?(): void
    onEscKeyPressed?(): void
    placeholder?: string
}

export interface IEvent {
    _reactName: string,
    _targetInst: any,
    altKey: boolean,
    bubbles: boolean,
    cancelable: boolean,
    charCode: number,
    code: string,
    ctrlKey: boolean,
    currentTarget: any,
    defaultPrevented: boolean,
    detail: number,
    eventPhase: number,
    getModifierState: any,
    isDefaultPrevented: any,
    isPropagationStopped: any,
    isTrusted: boolean,
    key: string,
    keyCode: number,
    locale: any,
    location: number,
    metaKey: boolean,
    nativeEvent: number,
    repeat: boolean,
    shiftKey: boolean,
    target: any,
    timeStamp: number,
    type: string,
    view: Window,
    which: number
}


export const Input = ({
    name,
    icon,
    size = 'sm',
    specs,
    value,
    testId,
    onChange,
    readOnly,
    disabled,
    placeholder,
    onReset,
    autocomplete,
    onEscKeyPressed,
    onEnterKeyPressed,
    labelColor = Colors.Dark,
}: IComponentProps) => {
    const INPUT_MAX_LENGTH = 524287

    const [descriptionVisible, setDescriptionVisible] = useState(false);

    const toggleDescriptionVisible = () => setDescriptionVisible(!descriptionVisible);

    const inputRef = useRef<any>()

    const handleChange = (e: IEvent) => {
        if (onChange) onChange(name, e.target.value);
    };

    const onFocus = () => {
        if (inputRef?.current) inputRef?.current?.scrollIntoView({
            behaviour: 'smooth',
            block: 'nearest'
        })
    }

    const onKeyPress = (e: any) => {
        if (inputRef?.current) inputRef?.current?.scrollIntoView({
            behaviour: 'smooth',
            block: 'nearest'
        })
        if (e.keyCode === 13) {
            if (onEnterKeyPressed) onEnterKeyPressed()
            e.preventDefault()
        } if (e.keyCode === 27) {
            if (onEscKeyPressed) onEscKeyPressed()
            e.preventDefault()
        }
    }

    const getInputComponent = () => {
        if (specs?.type === 'boolean') {
            return (
                <select
                    ref={inputRef}
                    data-testid={testId}
                    onFocus={onFocus}
                    className={`form-control form-control-${size}`}
                    value={value ? 'true' : 'false'}
                    disabled={disabled}
                    onChange={(e) => {
                        if (onChange) onChange(name, e.target.value === 'true')
                    }}
                >
                    {[
                        { caption: 'Sim', value: `true` },
                        { caption: 'Não', value: `false` },
                    ].map((option) => (
                        <option value={option.value.toString()} key={option.value.toString()}>
                            {option.caption}
                        </option>
                    ))}
                </select>
            );
        } else if (specs?.type === 'textarea') {
            return (
                <textarea
                    ref={inputRef}
                    data-testid={testId}
                    onFocus={onFocus}
                    className={`form-control form-control-${size}`}
                    value={value || ''}
                    autoComplete={autocomplete || 'on'}
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    onChange={handleChange as any}
                    rows={specs?.rows}
                />
            );
        } else if (specs?.type === 'color') {
            return (
                <div className='w-100 d-flex align-items-center'>
                    <input
                        ref={inputRef}
                        data-testid={testId}
                        type='color'
                        onFocus={onFocus}
                        className={`w-100 form-control form-control-select form-control-${size}`}
                        value={value || ''}
                        autoComplete={autocomplete || 'on'}
                        disabled={disabled}
                        onChange={handleChange as any}
                    />
                    <span className='ms-2'>
                        <TouchableOpacity
                            onClick={onReset}
                        >
                            <MaterialIcon icon='close' size='tiniest' />
                        </TouchableOpacity>
                    </span>
                </div>
            );
        } else if (specs?.type === 'select') {
            return (
                <select
                    ref={inputRef}
                    data-testid={testId}
                    onFocus={onFocus}
                    className={`form-control form-control-select form-control-${size}`}
                    value={value || ''}
                    autoComplete={autocomplete || 'on'}
                    disabled={disabled}
                    onChange={handleChange as any}
                >
                    {specs?.options?.map((option) => (
                        <option value={option.value || ''} key={option.value || ''}>
                            {option.caption}
                        </option>
                    ))}
                </select>
            );
        } else if (specs?.type === 'number') {
            return (
                <input
                    ref={inputRef}
                    data-testid={testId}
                    onFocus={onFocus}
                    className={`form-control form-control-${size}`}
                    value={value || ''}
                    name={name}
                    type="number"
                    placeholder={placeholder}
                    autoComplete={autocomplete || 'on'}
                    readOnly={readOnly}
                    inputMode="numeric"
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    min={specs?.min}
                    max={specs?.max}
                    step={specs?.step}
                    onChange={handleChange as any}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        } else if (specs?.type === 'decimal') {
            return (
                <input
                    data-testid={testId}
                    className={`form-control form-control-${size}`}
                    value={value || ''}
                    type="number"
                    ref={inputRef}
                    onFocus={onFocus}
                    name={name}
                    inputMode='decimal'
                    placeholder={placeholder}
                    autoComplete={autocomplete || 'on'}
                    readOnly={readOnly}
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    min={specs?.min}
                    max={specs?.max}
                    step={0.01}
                    onChange={handleChange as any}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        } else if (specs?.type === 'int') {
            return (
                <input
                    data-testid={testId}
                    className={`form-control form-control-${size}`}
                    value={value || ''}
                    ref={inputRef}
                    onFocus={onFocus}
                    name={name}
                    type="number"
                    inputMode='numeric'
                    readOnly={readOnly}
                    autoComplete={autocomplete || 'on'}
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    placeholder={placeholder}
                    min={specs?.min}
                    max={specs?.max}
                    step={1}
                    onChange={handleChange as any}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        } else if (specs?.type === 'float') {
            return (
                <input
                    data-testid={testId}
                    className={`form-control form-control-${size}`}
                    value={value || ''}
                    ref={inputRef}
                    onFocus={onFocus}
                    name={name}
                    type="number"
                    inputMode='numeric'
                    autoComplete={autocomplete || 'on'}
                    min={specs?.min}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    max={specs?.max}
                    step={specs?.step}
                    onChange={handleChange as any}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        } else if (specs?.type === 'text') {
            return (
                <input
                    className={`form-control form-control-${size}`}
                    type="text"
                    data-testid={testId}
                    ref={inputRef}
                    onFocus={onFocus}
                    name={name}
                    autoComplete={autocomplete || 'on'}
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={handleChange as any}
                    readOnly={readOnly}
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        } else if (specs?.type === 'search') {
            return (
                <input
                    className={`form-control form-control-${size}`}
                    type="search"
                    data-testid={testId}
                    ref={inputRef}
                    onFocus={onFocus}
                    name={name}
                    autoComplete={autocomplete || 'on'}
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={handleChange as any}
                    readOnly={readOnly}
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        } else if (specs?.type === 'url') {
            return (
                <input
                    className={`form-control form-control-${size}`}
                    type="url"
                    data-testid={testId}
                    ref={inputRef}
                    onFocus={onFocus}
                    name={name}
                    autoComplete={autocomplete || 'on'}
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={handleChange as any}
                    readOnly={readOnly}
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        } else if (specs?.type === 'email') {
            return (
                <input
                    className={`form-control form-control-${size}`}
                    type="email"
                    data-testid={testId}
                    ref={inputRef}
                    onFocus={onFocus}
                    name={name}
                    autoComplete={autocomplete || 'on'}
                    placeholder={placeholder}
                    inputMode="email"
                    value={value || ''}
                    onChange={handleChange as any}
                    readOnly={readOnly}
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        } else if (specs?.type === 'date') {
            return (
                <input
                    className={`form-control form-control-${size}`}
                    type="date"
                    data-testid={testId}
                    ref={inputRef}
                    onFocus={onFocus}
                    autoComplete="off"
                    value={value || ''}
                    placeholder={placeholder}
                    max={specs?.max}
                    min={specs?.min}
                    onChange={handleChange as any}
                    disabled={disabled}
                    name={name}
                    readOnly={readOnly}
                />
            );
        } else if (specs?.type === 'password') {
            return (
                <input
                    className={`form-control form-control-${size}`}
                    type="password"
                    data-testid={testId}
                    ref={inputRef}
                    name={name}
                    onFocus={onFocus}
                    autoComplete={autocomplete || 'on'}
                    value={value || ''}
                    placeholder={placeholder}
                    onChange={handleChange as any}
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    readOnly={readOnly}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        } else if (specs?.type === 'eval') {
            return (
                <input
                    className={`form-control form-control-${size}`}
                    type="text"
                    data-testid={testId}
                    name={name}
                    ref={inputRef}
                    onFocus={onFocus}
                    value={value || ''}
                    autoComplete={autocomplete || 'on'}
                    placeholder={placeholder}
                    onChange={handleChange as any}
                    readOnly={readOnly}
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        } else if (specs?.type === 'tel') {
            return (
                <input
                    className={`form-control form-control-${size}`}
                    type="tel"
                    data-testid={testId}
                    name={name}
                    ref={inputRef}
                    onFocus={onFocus}
                    value={value || ''}
                    autoComplete={autocomplete || 'on'}
                    placeholder={placeholder}
                    onChange={handleChange as any}
                    readOnly={readOnly}
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        } else if (specs?.type === 'time') {
            return (
                <TimeInput
                    size={size}
                    min={specs?.min}
                    max={specs?.max}
                    name={name || ''}
                    onFocus={onFocus}
                    value={value || ''}
                    readOnly={readOnly}
                    disabled={disabled}
                    testId={testId || ''}
                    placeholder={placeholder}
                    minutesStep={specs?.step}
                    handleChange={(newValue) => onChange(name, newValue)}
                />
            );
        } else {
            return (
                <input
                    data-testid={testId}
                    className={`form-control form-control-${size}`}
                    value={value || ''}
                    ref={inputRef}
                    name={name}
                    onFocus={onFocus}
                    autoComplete={autocomplete || 'on'}
                    onChange={handleChange as any}
                    placeholder={placeholder}
                    disabled={disabled}
                    maxLength={specs?.maxLength || INPUT_MAX_LENGTH}
                    readOnly={readOnly}
                    onKeyDownCapture={onKeyPress as any}
                />
            );
        }
    };

    return (
        <BaseComponent>
            <>
                <Popup
                    icon="info"
                    onClose={toggleDescriptionVisible}
                    visible={descriptionVisible}
                    title={specs?.caption}
                    footerButtons={[
                        { caption: 'Ok', onClick: toggleDescriptionVisible, color: Colors.Secondary }
                    ]}
                >
                    <div className='w-100 px-2 py-3 text-center'>{specs?.description}</div>
                </Popup>

                <div className={`w-100 form-group form-group-${specs?.type}`}>
                    {(specs?.caption !== undefined || specs?.key) && (
                        <div className="text-light d-flex align-items-center justify-content-between">
                            <span className='text-nowrap'>
                                <small className={`text-${labelColor}`}>
                                    <small>
                                        {specs?.caption || specs?.key || (<span className='py-2 text-light'>_</span>)}
                                    </small>
                                </small>

                                {specs?.description && (
                                    <span
                                        style={{ fontSize: 11, display: 'inline-block', cursor: specs?.description ? 'pointer' : 'auto' }}
                                        className={`p-2 ${specs?.description ? 'text-info' : 'text-secondary'}  material-icons small`}
                                        onClickCapture={() => { if (specs?.description) { toggleDescriptionVisible() }}}
                                    >
                                        info
                                    </span>
                                )}
                            </span>

                            <span className=''>
                                {specs.type === 'url' && <a target="_blank" rel="noreferrer" href={value}><MaterialIcon icon='link' size='tiny' color='info' /></a>}
                            </span>
                        </div>
                    )}
                    <div className='w-100 d-flex align-items-center'>
                        {icon && (
                            <span className='pe-2 d-flex align-items-center'>
                                <MaterialIcon icon={icon} size='small' />
                            </span>
                        )}
                        {getInputComponent()}
                    </div>
                </div>
            </>
        </BaseComponent>
    );
};
