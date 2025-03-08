import Link from "next/link";

export default function NotificationsSlot(){
    return(
        <>
            <div className="font-bold text-2xl text-center h-[80%] border-2 border-purple-900">
                
                <p>Archived Notifications Slot</p>
                <br/>
                <Link href="/complexDashboard">Default</Link>

                
            </div>
        </>
    )
}