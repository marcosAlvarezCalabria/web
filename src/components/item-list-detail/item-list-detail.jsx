import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/auth.context";

function ItemListDetail({ comment ,handleDeleteComment}){
    const [showButtonDelete, setShowButtonDelete] = useState(false)
    const { user } = useContext(AuthContext);
    useEffect(() => {
       if(comment.author.id === user.id) {
        setShowButtonDelete(true)} else {
            setShowButtonDelete(false)
        }
    },[showButtonDelete])

    
    return(
        <>
        <li>{comment.text}</li>
         {showButtonDelete && <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>} 
        </>
        
    )
}
export default ItemListDetail;