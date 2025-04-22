const CardTeamMember = ({ name, description}) => {
  return(
    <>
    <div className="bg-[#ecf0f1] p-6 rounded-lg hover:scale-105 transition-all duration-500">
        <div className="flex flex-col gap-5 text-center ">
          <h1 className="font-bold">{name}</h1>
          <p className="text-[14px]">
            {description}
          </p>
        </div>
    </div>
    </>
  );
}

export default CardTeamMember;
