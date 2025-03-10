import { BLOG_DATA } from "../../../data"
import BlogPostCard from "./BlogPostCard"
export default function Blogs() {
    return (
        <div className="bg-slate-100 flex flex-col justify-center items-center py-10">
            <p className="text-blue-600 xl:text-[20px] text-[14px] font-[500] uppercase">LATEST NEW</p>
            <h1 className="xl:text-[34px] text-[1.6rem] mb-9 font-bold">From our Blog</h1>
            <div className="flex flex-col xl:flex-row gap-8">
                {BLOG_DATA.map(({ image, title, description, date }, index) => {
                    return <BlogPostCard image={image} title={title} description={description} date={date} key={index} />
                })
                }

            </div>
        </div>
    )
}