"use client";

import { useFormState, useFormStatus } from "react-dom";

export default function SubmitButton() {

    const { pending } = useFormStatus();

    return <button 
        type="submit" 
        disabled={pending}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-green-400">
            Add Product
        </button>;
}