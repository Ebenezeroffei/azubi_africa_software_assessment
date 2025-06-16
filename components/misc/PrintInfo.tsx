import { useAppContext } from "@providers/ContextProvider";
import moment from "moment"

const PrintInfo = () => {
    const { user } = useAppContext();
    const todaysDate = moment().format('Do MMMM YYYY, h:mm A');

    return (
        <section className="text-xs my-4 mx-2">
            <div className="flex justify-between gap-2 flex-wrap">
                <p>
                    Printed By: {`${user?.first_name} ${user?.last_name}`}
                </p>
                <p>
                    Printed On: {todaysDate}
                </p>
            </div>
            <p className="mt-2 text-center font-semibold">
                ServeIQ Powered By HarnessIQ
            </p>
        </section>
    )
}

export default PrintInfo