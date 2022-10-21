import { useDispatch } from "react-redux";
import { postPost } from "../../redux/actions";

const dispatch = useDispatch

function registerPost (data) {

    dispatch(postPost(data))

}

export default registerPost