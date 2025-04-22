import PicAndTitle from "@/components/pic-and-title";
import aboutPic from "@/assets/imgs/about/about.jpg"
import CardTeamMember from "@/components/cardTeamMember"
import { teams } from '@/data/teams'
const About = () => {
    return (

        <>
            <title>About</title>
            <PicAndTitle title={'about'} pic={aboutPic} />
            <div className="container mx-auto my-5">
                <div className="grid grid-cols-4 gap-5">
                    {teams.map((person, i) => (<CardTeamMember {...person} key={i} />))}
                </div>
            </div>

        </>
    )
}


export default About;