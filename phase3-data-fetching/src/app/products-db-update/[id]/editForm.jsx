"use client";

import { useActionState } from "react"
import { EditProduct } from "./EditProduct";

export default function EditForm (props) {

    const initialState = {
        errors: []
    }

    const EditProductWithId = EditProduct.bind(null , props.product.id);


    const [state, formAction, isPending] = useActionState(EditProductWithId , initialState)
    return (
        <form action={formAction} className="space-y-4 bg-amber-950">
            <div className="flex flex-col">
                <label htmlFor="title" className="mb-2 font-semibold">Title:</label>
                <input type="text" id="title" defaultValue={props.product.title} name="title" className="p-2 border rounded" />
                {state.errors.title && <p>{state.errors.title}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="price" className="mb-2 font-semibold">Price:</label>
                <input type="number" id="price" defaultValue={props.product.price} name="price" className="p-2 border rounded" />
                {state.errors.price && <p>{state.errors.price}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="description" className="mb-2 font-semibold">Description:</label>
                <textarea id="description" defaultValue={props.product.description} name="description" className="p-2 border rounded"></textarea>
                {state.errors.description && <p>{state.errors.description}</p>}
            </div>
            {/* <SubmitButton/> */}
            <button
                type="submit"
                disabled={isPending}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-green-400">
                Edit Product
            </button>;
        </form>
    )
}