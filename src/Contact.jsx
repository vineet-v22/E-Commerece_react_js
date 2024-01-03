import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.phone || !data.msg)
      alert(`Please enter details`)
    else
      alert(`My name is ${data.name}. My phone no. is ${data.phone}. My email is ${data.email}. I want to say something is ${data.msg}`)
  }

  return (
    <>
      <div className="my-5">
        <h2 className="text-center contact">Contact Us</h2>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                  <input type="text" autoComplete="off" className="form-control" id="exampleFormControlInput1" name="name" value={data.name}
                    onChange={InputEvent}
                    placeholder="Enter Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Phone No.</label>
                  <input type="number" autoComplete="off" className="form-control" id="exampleFormControlInput2" name="phone" value={data.phone}
                    onChange={InputEvent}
                    placeholder="Phone number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" autoComplete="off" className="form-control" id="exampleFormControlInput3" name="email" value={data.email}
                    onChange={InputEvent}
                    placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Textarea</label>
                  <textarea className="form-control" autoComplete="off" id="exampleFormControlTextarea1" name="msg" value={data.msg}
                    onChange={InputEvent}
                    rows="3"></textarea>
                </div>
                <div className="col-12 mx-auto">
                  <button className="btn btn-outline-success fw-bold" type="submit">Submit form</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
