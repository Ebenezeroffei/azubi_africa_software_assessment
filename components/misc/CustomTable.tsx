import MiscUtils from "@utils/misc/misc_utils";
import { useId } from "react"

type CustomTableProps = {
    rows: any[],
    dataKeys: string[],
    columns: string[],
    isFixed?: boolean,
    onEditHandler?: (id: string) => void,
    onViewHandler?: (id: string) => void,
    onDeleteHandler?: (id: string) => void,
}

const CustomTable = ({
    rows,
    dataKeys,
    columns,
    onDeleteHandler,
    onEditHandler,
    onViewHandler,
    isFixed = false,
}: CustomTableProps) => {
    const randomId = useId();

    return (
        <section className="py-4 overflow-y-auto w-full">
            <table className={`${isFixed && 'table-fixed'} text-xs w-full text-left rtl:text-right text-gray-500`}>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                    <tr>
                        {
                            columns.map((column, index) => (
                                <th
                                    scope="col"
                                    className="p-2"
                                    key={`${randomId}_${index}_column`}
                                >
                                    {column}
                                </th>
                            ))
                        }
                        {
                            (onDeleteHandler || onEditHandler || onViewHandler) && (
                                <th
                                    scope="col"
                                    className="p-2"
                                >
                                    Actions
                                </th>
                            )
                        }
                    </tr>
                </thead>
                <tbody className="text-gray-800">
                    {
                        rows.map((row, index) => {
                            return (
                                <tr
                                    className="bg-white border-b border-gray-200"
                                    key={`${randomId}_${index}_row`}
                                >
                                    {
                                        dataKeys.map((dataKey, index) => (
                                            <td
                                                className="p-2"
                                                key={`${randomId}_${index}_row_data`}
                                            >
                                                {MiscUtils.getValueByKeyPath(row, dataKey)}
                                            </td>
                                        ))
                                    }
                                    <td className="p-2 space-x-2">
                                        {
                                            onViewHandler && (
                                                <span
                                                    className="cursor-pointer text-primary font-semibold hover:underline"
                                                    onClick={() => onViewHandler(row['id'])}
                                                >
                                                    View
                                                </span>
                                            )
                                        }
                                        {
                                            onEditHandler && (
                                                <span
                                                    className="cursor-pointer text-blue-500 font-semibold hover:underline"
                                                    onClick={() => onEditHandler(row['id'])}
                                                >
                                                    Edit
                                                </span>
                                            )
                                        }
                                        {
                                            onDeleteHandler && (
                                                <span
                                                    onClick={() => onDeleteHandler(row['id'])}
                                                    className="cursor-pointer text-red-500 font-semibold hover:underline"

                                                >
                                                    Delete
                                                </span>
                                            )
                                        }

                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default CustomTable