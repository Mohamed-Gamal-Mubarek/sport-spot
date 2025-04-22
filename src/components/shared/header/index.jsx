import Link from "next/link";
import { naves } from "@/data/naves";
import Logo from "@/components/logo";
import { logo } from "@/data/logo/logo";
const Header = () => {
    return (
        <>
            <div className="bg-[#2a53c1]">
                <div className="max-w-[417px] mx-auto flex justify-between">
                    {naves.map(({url, label},i)=>(
                        <Link href={url} className="text-[16px] capitalize font-bold px-[10px] py-[18px] text-[#fff] hover:text-[#c9c9c9]">{label}</Link>
                    ))}
                    
                </div>
            </div>
            <div className="">
                <Logo logo={logo}/>
            </div>
        </>
    );
}


export default Header;
