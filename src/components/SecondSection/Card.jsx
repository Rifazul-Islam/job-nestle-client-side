
const Card = ({logo}) => {
  const{img} = logo
    return (
        <div> 
        <div className="bg-[#FFFFFF] rounded-lg p-4 border-2
        card card-compact  shadow-xl  border-green-400
        overflow-hidden transition-all hover:scale-105 hover:shadow-2xl group cursor-pointer">
            <img className="w-40" src={img} alt="" />
        </div>

</div>

    );
};

export default Card;