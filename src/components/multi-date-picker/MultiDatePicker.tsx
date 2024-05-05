import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { BaseComponent } from '../BaseComponent'

interface IComponentProps {
  onChange: any,
  selectedDates: [Date, Date],
  minDate?: Date,
  maxDate?: Date,
  intercalated?: boolean
}

export const MultiDatePicker = ({ onChange, selectedDates, minDate, maxDate, intercalated }: IComponentProps) => {

    if (intercalated) {
        return (
            <BaseComponent>
                <DatePicker
                    minDate={minDate}
                    selected={selectedDates[selectedDates?.length - 1] || new Date()}
                    highlightDates={selectedDates}
                    onChange={onChange}
                    maxDate={maxDate}
                    onSelect={onChange}
                    excludeDates={[]}
                    inline
                />
            </BaseComponent>
        )
    }

    return (
        <BaseComponent>
            <DatePicker
                minDate={minDate}
                selected={selectedDates[1] || selectedDates[0]}
                startDate={selectedDates[0]}
                endDate={selectedDates[1]}
                onChange={onChange}
                maxDate={maxDate}
                excludeDates={[]}
                selectsRange
                inline
            />
        </BaseComponent>
    );
}
