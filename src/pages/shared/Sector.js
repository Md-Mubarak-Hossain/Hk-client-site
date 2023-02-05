import React, { useState } from 'react';

const Sector = () => {
   
    const[terms,setTerms]=useState('')
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;     
        const e = document.getElementById("ddlViewBy");
        const sector = e.options[e.selectedIndex].text;
        console.log(sector)
        const dataPost={
            name,sector,terms
        }
        fetch('https://hk-server.vercel.app/user',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(dataPost)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged)
            {
                alert('Successfully user added')
                form.reset()
            }
        })
        console.log(dataPost)
       
    }
    return (
        <>
        <div className="w-full flex flex-col  shadow-md rounded p-4 mb-2 lg:px-8 lg:pt-6 lg:pb-8 lg:mb-4 text-start">
            <div className='w-full border py-5 px-5 lg:px-10 lg:w-1/2 mx-auto rounded-lg'>
                <h2 className='uppercase text-center w-full'>User input form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="my-4">                        
                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name='name' placeholder="enter name" required/>
                    </div>
                    
                    <div className="mb-6">
                   
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
                    <div className="mb-6">
                       <div className="form-control">
                         <label className="cursor-pointer flex">  
                             <input type="checkbox" onClick={()=>setTerms("Agree to terms")}  value="Agree to terms" className="checkbox checkbox-accent mx-2 w-5 h-5" required/> 
                            <span className="label-text">Agree to terms</span>
                        </label>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <button className="btn w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div >
    </>
    );
};

export default Sector;