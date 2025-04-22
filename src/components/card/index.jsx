import Image from "next/image";
import { capitalizeFirst } from "@/utilities/capitalizeFirst";
const Card = ({ pic, title, description }) => {
    return (
        <>
            <div className="border border-[gray] overflow-hidden  rounded-3xl">
                {/* pic */}
                <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-3xl">   {/* parent */}
                    <Image
                        src={pic}
                        alt="Hero banner"
                        fill                    /* makes img absolutely positioned */
                        className="object-cover"/* or object-contain */
                        priority                /* optional: pre‑load above‑the‑fold */
                    />
                </div>

                {/* content */}
                <div className="px-4 py-4">

                    <h2 className="text-[30px] font-bold">
                        {capitalizeFirst(title)}
                    </h2>
                    <p className="mt-2 placeholder:text-gray-400 ">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Card;
