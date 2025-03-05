"use client"

export default function GlobalError() {
    return (
        <html>
            <body>
                Error Occured
                <button onClick={() => { window.location.reload() }}>Refresh</button>
            </body>
        </html>
    )
}