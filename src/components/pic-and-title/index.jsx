
import ResponsiveImage from "../responsiveImage";
const PicAndTitle = ({ title, pic }) => {
    return (
        <>
            <div className="relative container mx-auto">
                <ResponsiveImage src={pic} alt={'test'} />

                <div className="absolute w-full top-[480px]">
                    <div className="bg-[#2a53c1] w-[80%] mx-auto text-[22px] text-[#fff] font-bold capitalize">{title}</div>
                </div>
            </div>
        </>
    );
}
export default PicAndTitle;