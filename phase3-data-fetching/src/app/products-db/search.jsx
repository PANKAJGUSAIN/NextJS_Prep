import Form from 'next/form';

export default function Search() {
    return (
        <Form action='/products-db' className="flex flex-col items-center">
            <input type="text" name="query" placeholder="Search..." className="border rounded p-2 mb-2" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
        </Form>
    );
}