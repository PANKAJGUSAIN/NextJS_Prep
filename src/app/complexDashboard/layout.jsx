
export default function ComplexDashboardLayout(props) {
    console.log(props)

    const isLoggedIn = false ;

    return isLoggedIn ? (
        <div className="h-full w-full ">
            <div>{props.children}</div>
            <div className="flex h-full w-full ">
                <div className="flex flex-col h-full w-[50%]">
                    {props.users}
                    {props.revenue}
                </div>
                <div className="h-full w-[50%]">
                    {props.notifications}
                </div>
            </div>
        </div>
    ) : (
        props.login
    )
}