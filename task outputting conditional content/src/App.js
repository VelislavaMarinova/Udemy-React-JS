import React, { useState } from "react"

function App() {

  const [isDeleting, setIsDeleting] = useState(false);

  const deleteHandler = () => {
    setIsDeleting(true)
  };

  const proceedHandler = () => {
    setIsDeleting(false)
  }
  let warning
  if (isDeleting) {

    warning = (<div id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={proceedHandler}>Proceed</button>
    </div>)
  }

  return (
    <div>
      {warning}

      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default App;
