import { useState } from "react"

export const useToggler = (defaultValue = false) => {
    const [value, setValue] = useState(defaultValue)

    return {
        value,
        setValue,
        toggle: () => setValue(!value)
    }
}
