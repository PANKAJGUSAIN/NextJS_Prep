"use client"

// import SubmitButton from "./button";
import { useActionState } from "react";
import { creatProduct } from "./products";

export default function addProductsPage() {

    const initialState = {
        errors: {},
    }

    const [state, formAction, isPending] = useActionState(creatProduct, initialState);





    return (
        <>
            <form action={formAction} className="space-y-4 bg-amber-950">
                <div className="flex flex-col">
                    <label htmlFor="title" className="mb-2 font-semibold">Title:</label>
                    <input type="text" id="title" name="title"  className="p-2 border rounded" />
                    {state.errors.title && <p>{state.errors.title}</p>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="price" className="mb-2 font-semibold">Price:</label>
                    <input type="number" id="price" name="price"  className="p-2 border rounded" />
                    {state.errors.price && <p>{state.errors.price}</p>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="mb-2 font-semibold">Description:</label>
                    <textarea id="description" name="description"  className="p-2 border rounded"></textarea>
                    {state.errors.description && <p>{state.errors.description}</p>}
                </div>
                {/* <SubmitButton/> */}
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-green-400">
                    Add Product
                </button>;
            </form>
        </>
    )
}

