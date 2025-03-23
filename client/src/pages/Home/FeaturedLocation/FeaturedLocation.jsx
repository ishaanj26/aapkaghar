
import { usePagination } from "../../../components/Hooks/hook"
import { LocationPlate } from "./LocationPlate"
import { CITYS } from "../../../data"
import  {PaginationBullets}  from "./PaginationBullets"

export default function FeaturedLocation() {

    const {
        paginatedData, 
        currentPage, 
        totalPages,
        goToPage,
        direction
    } = usePagination(CITYS)

    console.log('paginatedData', paginatedData)

    return (
        <div className="flex flex-col justify-center items-center py-20">
            <p className="text-blue-600 xl:text-[20px] text-[14px] font-[500] uppercase">Explore Cities</p>
            <h1 className="xl:text-[34px] text-[1.6rem] mb-9 font-bold">Our Location For You</h1>
            <div className="flex w-full  px-2 overflow-hidden">
                <div
                    className="flex justify-evenly gap-2 w-full min-h-[370px] "

                >
                    {paginatedData.map(({img,title},index) => {
                    return (<LocationPlate key={title} image={img} location={title} index={index} direction={direction} />)
                })}
                </div>
                <div>

                </div>
            </div>
            <div className="mt-11">

                <PaginationBullets currentPage={currentPage} onBulletClick={(index) => goToPage(index + 1)} totalPages={totalPages} />

            </div>
        </div>
    )
}

