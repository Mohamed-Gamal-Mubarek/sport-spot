// components/ResponsiveImage.jsx
import Image from "next/image";

const ResponsiveImage = ({ src, alt }) => (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Image
            src={src}                       /* e.g. "/images/hero.jpg" in /public */
            alt={alt}
            fill
            sizes="(max-width:1024px) 100vw, 1024px"
            className="object-cover rounded-lg"
            priority                        /* remove if not above the fold */
        />
    </div>
);

export default ResponsiveImage;
