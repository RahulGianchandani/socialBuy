import React, { useState } from 'react'

const ContactUs = () => {


    const [formData, setFormData] = useState({
        fname: "",
        email: "",
        msg: "",
    });

    const submitMsg = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    console.log("formData", formData);
    return (
        <div className='bg-[#f7f7fb] py-24'>
            <h2 class="text-black leading-[1.2] text-center font-extrabold text-3xl sm:text-3xl mb-20 ">Contact Us</h2>
            <div className='container'>
                <div className='flex justify-center'>
                    <form className='col-4'>
                        <div className="mb-3 ">
                            <label for="fname" className="form-label mb-0">Full Name</label>
                            <input type="text" name='fname' onChange={handleChange} className="form-control py-2 rounded-none" id="fname" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3 ">
                            <label for="email" className="form-label mb-0">Email address</label>
                            <input type="email" name='email' onChange={handleChange} className="form-control py-2 rounded-none" id="email" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3  mt-4">
                            <label for="msg" className="form-label mb-0">Message</label>
                            <textarea value={formData?.msg} onChange={handleChange} name='msg' class="form-control" id="msg" rows={5}></textarea>
                        </div>
                        <div className="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>
                        <button type='submit' onClick={(e) => submitMsg(e)} className='bg-[rgb(239,68,113)] mt-4 text-white text-xl w-full rounded-lg !py-4'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs