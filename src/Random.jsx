
function Random(){
    return(
      <div>
        <h1>Random Number: {Math.floor(Math.random() * 100)}</h1>
        <p>This is a random number generated on each render.</p>
      </div>
    )
}

export default Random;


