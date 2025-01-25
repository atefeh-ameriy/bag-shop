/*currently action*/
<form onSubmit={search}>
  <input name="query" />
  <button type="submit">Search</button>
</form>

/*react 19 action*/
"use server"

const submitData = async (userData) => {
    const newUser = {
        username: userData.get('username'),
        email: userData.get('email')
    }
    console.log(newUser)
}

const Form = () => {
    return <form action={submitData}>
        <div>
            <label>Name</label>
            <input type="text" name='username'/>
        </div>
        <div>
            <label>Name</label>
            <input type="text" name="email" />
        </div>
        <button type='submit'>Submit</button>
    </form>
}

export default Form;

/*Document Metadata*/
const HomePage = () => {
    return (
      <>
        <title>React 19</title>
        <meta name="description" content="React 19" />
        // Page content
      </>
    );
  }

  