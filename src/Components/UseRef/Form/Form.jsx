import { useEffect, useRef } from 'react';
import Input from '../Input/Input';

export default function Form() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
        <h2>useRef Exercise</h2>
            <p>
                <Input ref={inputRef} type="text" placeholder="enter something" />
            </p>
        </div>
    );
}