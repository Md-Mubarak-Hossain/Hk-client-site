import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {
    const user=useLoaderData()
    
    const[userData,setUser]=useState(user)
    const[update,setUpdate]=useState('')
   
   
const handleSubmit=event=>{
event.preventDefault()
const e = document.getElementById("ddlViewBy");
const sector = e.options[e.selectedIndex].text;
const dataPost={
   sector, ...userData
}
fetch(`https://hk-server.vercel.app/user/${userData._id}`,{
    method: 'PATCH',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(dataPost)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.modifiedCount>0){
       alert('successfully userData')
       setUpdate('Successfully update this user value')
      
    }
   
})

}
const onChangeable=event=>{
   
    const value = event.target.value;
    const field = event.target.name;
    const newData = { ...userData }
    newData[field] = value;
    setUser(newData);
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Update!</h1>
      <p className='text-primary'>{update}</p>  
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" onChange={onChangeable} defaultValue={userData.name} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" onChange={onChangeable} defaultValue={userData.email}className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sector</span>
          </label>
          {/* <input type="text" name="sector" onChange={onChangeable} defaultValue={userData.sector}className="input input-bordered" /> */}
          <select id="ddlViewBy" className="select select-secondary w-full">
                    <option value="1" disabled selected='selected'>
                    Pick the Sectors you are currently involved in.
                    </option>
                    <option value="2">Manufacturing</option>
                        <option value="19">Construction materials</option>
                        <option value="18">Electronics and Optics</option>
                        <option value="6">Food and Beverage</option>
                        <option value="342">Bakery confectionery products</option>
                        <option value="43">Beverages</option>
                        <option value="42">Fish fish products </option>
                        <option value="40">Meat meat products</option>
                        <option value="39">Milk dairy products </option>
                        <option value="437">Other</option>
                        <option value="378">Sweets snack food</option>
                        <option value="13">Furniture</option>
                        <option value="389">Bathroom/sauna </option>
                        <option value="385">Bedroom</option>
                        <option value="390">Children’s room </option>
                        <option value="98">Kitchen </option>
                        <option value="101">Living room </option>
                        <option value="392">Office</option>
                        <option value="394">Other (Furniture)</option>
                        <option value="341">Outdoor </option>
                        <option value="99">Project furniture</option>
                        <option value="12">Machinery</option>
                        <option value="94">Machinery components</option>
                        <option value="91">Machinery equipment/tools</option>
                        <option value="224">Manufacture of machinery </option>
                        <option value="97">Maritime</option>
                        <option value="271">Aluminium and steel workboats </option>
                        <option value="269">Boat/Yacht building</option>
                        <option value="230">Ship repair and conversion</option>
                        <option value="93">Metal structures</option>
                        <option value="508">Other</option>
                        <option value="227">Repair and maintenance service</option>
                        <option value="11">Metalworking</option>
                        <option value="67">Construction of metal structures</option>
                        <option value="263">Houses and buildings</option>
                        <option value="267">Metal products</option>
                        <option value="542">Metal works</option>
                        <option value="75">CNC-machining</option>
                        <option value="62">Forgings, Fasteners </option>
                        <option value="69">Gas, Plasma, Laser cutting</option>
                        <option value="66">MIG, TIG, Aluminum welding</option>
                        <option value="9">Plastic and Rubber</option>
                        <option value="54">Packaging</option>
                        <option value="556">Plastic goods</option>
                        <option value="559">Plastic processing technology</option>
                        <option value="55">Blowing</option>
                        <option value="57">Moulding</option>
                        <option value="53">Plastics welding and processing</option>
                        <option value="560">Plastic profiles</option>
                        <option value="5">Printing </option>
                        <option value="148">Advertising</option>
                        <option value="150">Book/Periodicals printing</option>
                        <option value="145">Labelling and packaging printing</option>
                        <option value="7">Textile and Clothing</option>
                        <option value="44">Clothing</option>
                        <option value="45">Textile</option>
                        <option value="8">Wood</option>
                        <option value="337">Other (Wood)</option>
                        <option value="51">Wooden building materials</option>
                        <option value="47">Wooden houses</option>
                        <option value="3">Other</option>
                        <option value="37">Creative industries</option>
                        <option value="29">Energy technology</option>
                        <option value="33">Environment</option>
                        <option value="2">Service</option>
                        <option value="25">Business services</option>
                        <option value="35">Engineering</option>
                        <option value="28">Information Technology and Telecommunications</option>
                        <option value="581">Data processing, Web portals, E-marketing</option>
                        <option value="576">Programming, Consultancy</option>
                        <option value="121">Software, Hardware</option>
                        <option value="122">Telecommunications</option>
                        <option value="22">Tourism</option>
                        <option value="141">Translation services</option>
                        <option value="21">Transport and Logistics</option>
                        <option value="111">Air</option>
                        <option value="114">Rail</option>
                        <option value="112">Road</option>
                        <option value="113">Water</option>
                    </select>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary uppercase">Update now</button>
        </div>
      </div>
    </div>
  </div>
</div>
            </form>  
        </div>
    );
};

export default Edit;