
const Contact = () => {

  return (
    <div>
      <h2>Contact</h2>
      <form className="flex flex-col">
        <input className="border-2 border-black" type="text" name="name" value="Name"></input>
        <input className="border-black border-2" type="text" name="email" value="Email"></input>
        <textarea className="border-black border-2" value="Enter Message"></textarea>
      </form>
    </div>
  )
}

export default Contact