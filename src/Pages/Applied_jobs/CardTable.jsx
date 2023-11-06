
const CardTable = ({apply,idx}) => {
    const{email,resume,category,photo,title,salary} = apply
    return (
        <tr>
        <th>
         { ++idx}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-16 h-16">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td>
          <h2>{title}</h2>
          
        </td>
        <td>
          <h2>{email}</h2>
          
        </td>


        <td>
           {salary}
        </td>
        <th>
          <button className="btn btn-ghost btn-xs border-2 border-green-500 capitalize">Applied</button>
        </th>
      </tr>
    );
};

export default CardTable;