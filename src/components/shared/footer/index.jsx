import Link from "next/link";
import { naves } from "@/data/naves";
const Footer = () => {
    return (
        <>
            <div className="bg-[#2a53c1]">
                <div className="container  mx-auto flex flex-col gap-4">

                    {naves.map(({ url, label }, i) => (
                        <div className="">
                            <Link href={url} className="text-[#fff] text-[30px] capitalize hover:text-[#c9c9c9]">{label}</Link>
                        </div>
                    ))}

                   
                </div>
            </div>
        </>
    );
}


export default Footer;