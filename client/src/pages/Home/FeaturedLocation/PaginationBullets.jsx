export const PaginationBullets = ({ totalPages, onBulletClick, currentPage }) => {
    console.log('currentPage', currentPage)
    return (
        <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, idx) => {
                return (
                    <div className={`h-4 w-4 rounded-full cursor-pointer ${idx === currentPage - 1 ? 'bg-blue-600' : 'bg-blue-300'
                        }`}
                        onClick={() => onBulletClick(idx)}
                    >

                    </div>
                )
            })}
        </div>
    )
}