import { Dispatch, SetStateAction } from "@node_modules/@types/react"
import MiscUtils from "@utils/misc/misc_utils"


type CustomPaginationProps = {
    defaultUrl: string,
    setUrl: Dispatch<SetStateAction<string>>,
    pagination: {
        count: number,
        totalPages: number,
        currentPage: number,
        prev?: number,
        next?: number,
    }
}

const CustomPagination = ({
    pagination,
    defaultUrl,
    setUrl,
}: CustomPaginationProps) => {

    return (
        <section className="flex justify-between items-center gap-2 my-4">
            <span className="text-xs text-gray-600 flex gap-1">
                Showing
                <span className="font-semibold text-gray-900">
                    {pagination.currentPage}
                </span>
                to
                <span className="font-semibold text-gray-900">
                    {pagination.totalPages}
                </span>
                of
                <span className="font-semibold text-gray-900">
                    {pagination.count}
                </span>
                Entries
            </span>
            <div className="flex text-xs font-semibold">
                {
                    pagination.prev && (
                        <p
                            onClick={() => setUrl(_ => MiscUtils.appendQueryString(
                                defaultUrl,
                                'page',
                                String(pagination.prev)
                            ))}
                            className="flex items-center justify-center w-[80px] cursor-pointer h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s hover:bg-gray-100 hover:text-gray-700"
                        >
                            Previous
                        </p>
                    )
                }
                <p className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300">
                    {pagination.currentPage}
                </p>
                {
                    pagination.next && (
                        <p
                            onClick={() => setUrl(_ => MiscUtils.appendQueryString(
                                defaultUrl,
                                'page',
                                String(pagination.next)
                            ))}
                            className="flex items-center justify-center w-[80px] cursor-pointer h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e hover:bg-gray-100 hover:text-gray-700"
                        >
                            Next
                        </p>
                    )
                }
            </div>
        </section>
    )
}

export default CustomPagination