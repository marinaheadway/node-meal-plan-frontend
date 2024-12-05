import { AiFillEdit, AiFillDelete  } from "react-icons/ai";

export const MyMeals = ({text, updatingInInput, deleteMyMeals}) => {
    return (
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}></AiFillEdit>
            <AiFillDelete onClick={deleteMyMeals}></AiFillDelete> 
        </div>
    )
}