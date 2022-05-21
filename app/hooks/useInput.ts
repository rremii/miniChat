import {ChangeEvent, useState} from 'react'

export const useInput = (initialVal: string | number) => {
    const [val, setVal] = useState(initialVal)

    const reset = (): void => {
        setVal(initialVal)
    }

    const bind = {
        value: val,
        onChange: (e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value),
    }

    return {val, reset, bind}
}
