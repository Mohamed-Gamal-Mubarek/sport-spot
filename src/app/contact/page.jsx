import PicAndTitle from "@/components/pic-and-title";
import contactPic from "@/assets/imgs/contact/contact-us.jpeg"
import CardTeamMember from "@/components/cardTeamMember"

const Contact = () => {
    return (

        <>
            <title>Contact</title>
            <PicAndTitle title={'contact'} pic={contactPic} />
            <div className="container mx-auto my-5">
                <div className="flex justify-center items-center h-screen">
                    <CardTeamMember name={'📧 البريد الإلكتروني: info@sportsworld.com'} description={'📞 الهاتف: 01000000000'} />
                </div>
            </div>
        </>
    );
}

export default Contact;