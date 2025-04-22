const Logo = ({ logo }) => {
    return (
        <>
            <div className="container mx-auto mt-[4px]">
                <div className="w-[80%] mx-auto flex justify-between ">
                    <h1 className="text-[100px] font-bold">{logo.title}</h1>


                    <h2 className="flex self-center ps-[4px] border-l-[3px] border-[black] text-[30px] capitalize  max-w-[200px] font-[1000]">{logo.subTitle}</h2>

                </div>
            </div>
        </>
    )
}


export default Logo;