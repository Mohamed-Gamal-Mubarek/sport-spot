import PicAndTitle from "@/components/pic-and-title";
import homePic from "@/assets/imgs/home/home.jpg"
const Home = () => {
  return (

    <>
      <title>Home</title>
      <PicAndTitle title={'home'} pic={homePic} />
      <div className="container bg-[red] mx-auto mt-5">
        
      </div>
    </>
  );
}

export default Home;