import { useSelector } from "react-redux";
import { State } from "../../../type";


export default function TodoList() {
    const { todoList } = useSelector((state: State) => state?.todo);
    console.log(todoList);
    
  return (
    <div className='flex flex-col gap-4 rounded-md border border-gray-400 mt-3 p-3'>
      {todoList?.length > 0 && (
        <div>
            {todoList.map((item,_id)=>(
                <p key={item._id}>
                    {item?.todo}
                </p>
            ))}
        </div>
      )}
      {todoList?.length === 0 &&(
        <p>Your todo is empty</p>
      )}
    </div>
  )
}
