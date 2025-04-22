import PicAndTitle from "@/components/pic-and-title";
import homePic from "@/assets/imgs/home/home.jpg"
import { home } from "@/data/home"
import Card from "@/components/card"
const Home = () => {
  return (

    <>
      <title>Home</title>
      <PicAndTitle title={'home'} pic={homePic} />
      {/* start page  */}
      <div className="container mx-auto my-5">
        <div className="grid grid-cols-1 gap-5">
          {home.map((news, i) => (<Card {...news} key={i} />))}
        </div>
      </div>
    </>
  );
}

export default Home;