import PicAndTitle from "@/components/pic-and-title";
import contactPic from "@/assets/imgs/contact/contact-us.jpeg"
import CardTeamMember from "@/components/cardTeamMember"
import { teams } from "@/data/teams"
const Contact = () => {
    return (

        <>
            <title>Contact</title>
            <PicAndTitle title={'contact'} pic={contactPic} />
            <div className="container mx-auto my-5">
                <div className="grid grid-cols-4 gap-5">
                    {teams.map((person, i)=>(<CardTeamMember {...person} key={i}/>))}
                </div>
            </div>
        </>
    );
}

export default Contact;