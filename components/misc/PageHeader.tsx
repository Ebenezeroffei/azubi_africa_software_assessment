import { MdChevronRight, } from "@node_modules/react-icons/md"
import { CgMenuRightAlt } from "@node_modules/react-icons/cg"
import { useAppContext } from "@providers/ContextProvider"
import Skeleton from "@components/skeleton"
import UserRoles from "@constants/auth/user_roles"
import Image from "@node_modules/next/image"
import MiscUtils from "@utils/misc/misc_utils"
import { Option } from "./Options"
import AuthUtils from "@utils/auth/auth_utils"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "@node_modules/next/navigation"


type PageHeaderProps = {
    title: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
    const { isSmallScreen, setShowSecondarySidebar, user } = useAppContext();
    const menuRef = useRef<HTMLDivElement>(null)
    const [openMenu, setOpenMenu] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleOutsideClick = (ele: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(ele.target as Node)) {
                setOpenMenu(_ => false)
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [])

    return (
        <header className="flex justify-between p-2 items-center bg-white rounded max-w-full flex-1">
            <div className="flex items-center gap-2 w-[calc(100%_-_148px)]">
                <section className="p-1 flex-none cursor-pointer transition-colors duration-150 rounded hover:bg-gray-100">
                    {
                        isSmallScreen && (
                            <CgMenuRightAlt
                                onClick={() => setShowSecondarySidebar(_ => true)}
                                size={20}
                            />
                        )
                    }
                </section>
                <h1 className="sm:text-lg md:text-xl text-gray-800 truncate">
                    {title}
                </h1>
            </div>
            {
                user
                    ? (
                        <section
                            className="relative"
                            ref={menuRef}
                        >
                            <div
                                onClick={() => setOpenMenu(prevOpenMenu => !prevOpenMenu)}
                                className="flex gap-2 flex-none transition-colors duration-150 cursor-pointer items-center p-1 rounded hover:bg-gray-100">
                                <section
                                    className="border border-gray-200 rounded p-0.5"
                                >
                                    <Image
                                        src={user.profile.avatar}
                                        alt="Profile"
                                        width={30}
                                        height={30}
                                        className="w-[30px] h-[30px]"
                                        unoptimized={true}
                                    />
                                </section>
                                <section className="max-w-24">
                                    <p className="text-xs truncate font-semibold text-gray-800">
                                        {`${user.first_name} ${user.last_name}`}
                                    </p>
                                    <p className="text-xs truncate text-gray-500">
                                        {Object.values(UserRoles)[user.profile.role]}
                                    </p>
                                </section>
                                <MdChevronRight
                                    className="rotate-90 text-gray-600"
                                />
                            </div>
                            {
                                openMenu && (
                                    <div
                                        className="cursor-pointer z-10 bg-white w-[180px] absolute right-0 rounded rounded-tr-none overflow-hidden border border-gray-100"
                                    >
                                        <Option
                                            text="Profile"
                                            onClickHandler={() => router.push('/dashboard/profile')}
                                        />
                                        <Option
                                            text="Logout"
                                            onClickHandler={() => AuthUtils.logout()}
                                        />
                                    </div>
                                )
                            }
                        </section>
                    )
                    : (
                        <Skeleton
                            className="w-[148px] h-[43.6px] rounded"
                        />
                    )
            }
        </header>
    )
}

export default PageHeader