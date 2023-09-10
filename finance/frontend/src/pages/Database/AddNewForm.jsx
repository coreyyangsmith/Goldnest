import React from 'react'
import { useState } from 'react'

//Axios Import
import axios from "axios"
import useForm from '../../components/UseForm.jsx'

const FORM_ENDPOINT = "http://127.0.0.1:8000/api/entrys/"

const MAIN_CATEGORY_API = "http://127.0.0.1:8000/api/maincategories/"
const SUB_CATEGORY_API = "http://127.0.0.1:8000/api/subcategories/"
const ROUTING_API = "http://127.0.0.1:8000/api/entitys/"

let mainCat = await axios.get(MAIN_CATEGORY_API);
let subCat = await axios.get(SUB_CATEGORY_API);
let routing = await axios.get(ROUTING_API);

mainCat = mainCat.data
subCat = subCat.data
routing = routing.data

console.log(mainCat)
console.log(subCat)
console.log(routing)



const AddNewForm = () => {
    // Use State to Manage variables for form submission
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [notes, setNotes] = useState("")
    const [routing, setRouting] = useState("")
    const [mainCat, setMainCat] = useState("")
    const [subCat, setSubCat] = useState("")  
    const [income, setIncome] = useState("")
    const [expense, setExpense] = useState("")  

    const additionalData = {
        created_at: "2018-11-20T15:58:44.767594-06:00",
        updated_at: "2018-11-20T15:58:44.767594-06:00",
    }   

    const { handleSubmit } = useForm({additionalData});

  return (
    <>
    <form action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                autoComplete='on'>




    </form>
    
    
    </>
  )
}

export default AddNewForm