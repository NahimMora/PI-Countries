export const validate = (state, name) => {
    if(name === "name"){
        state.name === "" ? setErrors({...errors, name:"Name is requeried"}) : setErrors({...errors, name:""})
    }
}