import PicAndTitle from "@/components/pic-and-title";
import newsPic from "@/assets/imgs/news/news.jpeg"
import { news } from "@/data/news"
import Card from "@/components/card"
const News = () => {
    return (

        <>
            <title>News</title>
            <PicAndTitle title={'news'} pic={newsPic} />
            {/* start page  */}
            <div className="container mx-auto my-5">
                <div className="grid grid-cols-1 gap-5">
                    {news.map((cardNews, i) => (<Card {...cardNews} key={i} />))}
                </div>
            </div>
        </>
    );
}

export default News;
