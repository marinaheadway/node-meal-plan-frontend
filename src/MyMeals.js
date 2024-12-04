import { AiFillEdit, AiFillDelete  } from "react-icons/ai";

export const MyMeals = ({text, editMyText, deleteMyMeals}) => {
    return (
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={editMyText}></AiFillEdit>
            <AiFillDelete onClick={deleteMyMeals}></AiFillDelete> 
        </div>
    )
}