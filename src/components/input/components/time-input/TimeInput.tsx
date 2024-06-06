import React, { useEffect, useMemo, useState } from 'react'

interface IComponentProps {
    size: 'sm' | 'md' | 'lg',
    testId: string,
    name: string,
    onFocus?: any,
    value: any,
    min: any,
    max: any,
    disabled?: boolean,
    readOnly?: boolean,
    minutesStep?: number,
    autoComplete?: boolean,
    placeholder?: string,
    handleChange?(newValue: any): any,
}

export const TimeInput = ({ name, size, testId, value, disabled, minutesStep, handleChange, onFocus, placeholder, readOnly, min, max }: IComponentProps) => {
    const hourOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    
    const minuteOptions = useMemo(() => {
        let options = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]

        if (minutesStep && minutesStep >= 1) {
            const steppedOptions = []
            for (let i = 0; i <= 59; i += minutesStep) steppedOptions.push(i)
            options = steppedOptions
        }

        return options
    }, [minutesStep])

    const timeRange = useMemo(() => {
        let minHours = `${min || '00:00'}`.split(':')[0]
        let minMinutes = `${min || '00:00'}`.split(':')[1]

        let maxHours = `${max || '23:59'}`.split(':')[0]
        let maxMinutes = `${max || '23:59'}`.split(':')[1]

        if (minMinutes.length > 1 && minMinutes.startsWith('0')) minMinutes = minMinutes[1]
        if (minHours.length > 1 && minHours.startsWith('0')) minHours = minHours[1]
        if (maxMinutes.length > 1 && maxMinutes.startsWith('0')) maxMinutes = maxMinutes[1]
        if (maxHours.length > 1 && maxHours.startsWith('0')) maxHours = maxHours[1]

        return {
            minMinutes: Number(minMinutes),
            minHours: Number(minHours),
            maxMinutes: Number(maxMinutes),
            maxHours: Number(maxHours),
        }
    }, [min, max])

    const [selectedHours, setSelectedHours] = useState<number>()
    const [selectedMinutes, setSelectedMinutes] = useState<number>()

    useEffect(() => {
        if (value && !selectedHours && !selectedMinutes) {
            let result = { hour: 0, minute: 0, time: '' }
            let h = parseInt((value || '00:00')?.split(':')[0])
            let m = parseInt((value || '00:00')?.split(':')[1])
    
            result.hour = h
            result.minute = m
            result.time = `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}`
    
            setSelectedHours(h)
            setSelectedMinutes(m)
        }
    }, [value, selectedHours, selectedMinutes])

    const inputOptions = useMemo(() => {
        const result = { hours: [], minutes: [] } as { hours: number[], minutes: number[] }

        for (const hour of hourOptions) {
            if (hour >= timeRange.minHours && hour <= timeRange.maxHours) result.hours.push(hour)
        }

        for (const minute of minuteOptions) {
            if (
                (selectedHours === result.hours[0] && minute >= timeRange.minMinutes)
                || (selectedHours === result.hours[result.hours.length  -1] && minute <= timeRange.maxMinutes)
                || (selectedHours && selectedHours < timeRange.maxHours && selectedHours > timeRange.minHours)
            ) result.minutes.push(minute)
        }

        return result
    }, [timeRange, selectedHours])

    const selectedTime = useMemo(() => {
        if (selectedHours !== null && selectedHours !== undefined && selectedMinutes !== null && selectedMinutes !== undefined) {
            if (inputOptions.hours.includes(selectedHours) && inputOptions.minutes.includes(selectedMinutes)) {
                let minutes = selectedMinutes < 10 ? `0${selectedMinutes}` : `${selectedMinutes}`
                let hours = selectedHours < 10 ? `0${selectedHours}` : `${selectedHours}`
                return `${hours}:${minutes}`
            }
        }
        return ''
    }, [selectedHours, selectedMinutes, inputOptions])

    useEffect(() => {
        if (handleChange && selectedTime) handleChange(selectedTime)
    }, [selectedTime])

    const handleHourChange = (e: any) => {
        setSelectedHours(parseInt(e?.target?.value))
    }

    const handleMinuteChange = (e: any) => {
        setSelectedMinutes(parseInt(e?.target?.value))
    }

    return (
        <>
            <div className='w-100 d-flex d-md-none '>
                <input
                    min={min}
                    max={max}
                    type="time"
                    name={name}
                    onFocus={onFocus}
                    readOnly={readOnly}
                    value={value || ''}
                    disabled={disabled}
                    data-testid={testId}
                    placeholder={placeholder}
                    className={`form-control form-control-${size}`}
                    onChange={(e) => {
                        if (handleChange) handleChange(e?.target?.value)
                    }}
                />
            </div>
            <div className='w-100 d-none d-md-flex'>
                <select
                    disabled={disabled}
                    className={`form-control form-control-${size}`}
                    onChange={handleHourChange}
                    value={((selectedHours !== null && selectedHours !== undefined) ? selectedHours : '')}
                >
                    <option value={''}>HH</option>
                    {inputOptions.hours.map((hour) => (
                        <option key={hour} value={hour}>{hour < 10 ? `0${hour}` : hour}</option>
                    ))}
                </select>

                <span className='px-1'>:</span>

                <select
                    disabled={disabled}
                    className={`form-control form-control-${size}`}
                    onChange={handleMinuteChange}
                    value={((selectedMinutes !== null && selectedMinutes !== undefined) ? selectedMinutes : '')}
                >
                    <option value={''}>MM</option>
                    {inputOptions.minutes.map((minute) => (
                        <option key={minute} value={minute}>{minute < 10 ? `0${minute}` : minute}</option>
                    ))}
                </select>
            </div>
        </>
    )
}
