
import './App.css'

function App() {
  const handleChange=(e)=>{
      e.preventDefault();
      const form = e.target;
      const name= form.name.value;
      const email= form.email.value;
      const user= {name, email}
      console.log(user)
      fetch('http://localhost:5000/users',{
        method:"POST",
        headers:{
          "content-type":"application/json"

        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{console.log(data)
      if(data.insertedId){
        alert('user Added Succesfully');
        form.reset();
      }})
  }
  
  return (
    <>
     
      <h1>Simple Crud</h1>
      <form onSubmit={handleChange} >
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value=" Submit" />
      </form>
     
    </>
  )
}

export default App
