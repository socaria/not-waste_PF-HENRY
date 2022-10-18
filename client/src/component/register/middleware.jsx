import { useDispatch } from "react-redux";
import { postSeller } from "../../redux/actions";

const dispatch = useDispatch

const registerSupplier = async (e , input, error) => {
    const name = input.namesupplier;
    let image = input.archivo
    const { phone, email, adress, cuit, category, cities } = input;
      const data = new FormData()
      data.append('file', image)
      data.append("upload_preset", "imagesnotwaste")
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/sercm/image/upload",
        {
          method: "POST",
          body: data,
        }
      )
      const url = await res.json()
      image = url.secure_url
      dispatch(
        postSeller({
          phone,
          email,
          adress,
          cuit,
          image,
          category,
          name,
          cities
        })
      )
  };

  export default registerSupplier