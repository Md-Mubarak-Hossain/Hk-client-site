import React from 'react';

const Sector = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
       
    }
    return (
        <>
        <div className="w-full flex flex-col justify-center items-center place-items-center  shadow-md rounded p-4 mb-2 lg:px-8 lg:pt-6 lg:pb-8 lg:mb-4">
            <div className='w-full border py-5 px-5 lg:px-10 lg:w-1/2 mx-auto rounded-lg'>
                <h2 className='uppercase text-center w-full'>User input form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block  text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name='name' placeholder="enter name" />
                    </div>
                    <div className="mb-4">
                        <label className="block  text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name='email' placeholder="email" />
                    </div>
                    <div className="mb-6">
                    <select className="select select-secondary w-full">
                        <option disabled selected>Please enter your name and pick the Sectors you are currently involved in.
                       </option>
                       <option>Manufacturing</option>
                        <option>Construction materials</option>
                        <option>Electronics and Optics</option>
                        <option>Food and Beverage</option>
                        <option>Bakery confectionery products</option>
                        <option>Beverages</option>
                        <option>Fish fish products </option>
                        <option>Meat meat products</option>
                        <option>Milk dairy products </option>
                        <option>Other</option>
                        <option>Sweets snack food</option>
                        <option>Furniture</option>
                        <option>Bathroom/sauna </option>
                        <option>Bedroom</option>
                        <option>Children’s room </option>
                        <option>Kitchen </option>
                        <option>Living room </option>
                        <option>Office</option>
                        <option>Other (Furniture)</option>
                        <option>Outdoor </option>
                        <option>Project furniture</option>
                        <option>Machinery</option>
                        <option>Machinery components</option>
                        <option>Machinery equipment/tools</option>
                        <option>Manufacture of machinery </option>
                        <option>Maritime</option>
                        <option>Aluminium and steel workboats </option>
                        <option>Boat/Yacht building</option>
                        <option>Ship repair and conversion</option>
                        <option>Metal structures</option>
                        <option>Other</option>
                        <option>Repair and maintenance service</option>
                        <option>Metalworking</option>
                        <option>Construction of metal structures</option>
                        <option>Houses and buildings</option>
                        <option>Metal products</option>
                        <option>Metal works</option>
                        <option>CNC-machining</option>
                        <option>Forgings, Fasteners </option>
                        <option>Gas, Plasma, Laser cutting</option>
                        <option>MIG, TIG, Aluminum welding</option>
                        <option>Plastic and Rubber</option>
                        <option>Packaging</option>
                        <option>Plastic goods</option>
                        <option>Plastic processing technology</option>
                        <option>Blowing</option>
                        <option>Moulding</option>
                        <option>Plastics welding and processing</option>
                        <option>Plastic profiles</option>
                        <option>Printing </option>
                        <option>Advertising</option>
                        <option>Book/Periodicals printing</option>
                        <option>Labelling and packaging printing</option>
                        <option>Textile and Clothing</option>
                        <option>Clothing</option>
                        <option>Textile</option>
                        <option>Wood</option>
                        <option>Other (Wood)</option>
                        <option>Wooden building materials</option>
                        <option>Wooden houses</option>
                        <option>Other</option>
                        <option>Creative industries</option>
                        <option>Energy technology</option>
                        <option>Environment</option>
                        <option>Service</option>
                        <option>Business services</option>
                        <option>Engineering</option>
                        <option>Information Technology and Telecommunications</option>
                        <option>Data processing, Web portals, E-marketing</option>
                        <option>Programming, Consultancy</option>
                        <option>Software, Hardware</option>
                        <option>Telecommunications</option>
                        <option>Tourism</option>
                        <option>Translation services</option>
                        <option>Transport and Logistics</option>
                        <option>Air</option>
                        <option>Rail</option>
                        <option>Road</option>
                        <option>Water</option>
                    </select>
                    </div>
                    <div className="mb-6">
                        <label className="block  text-sm font-bold mb-2" for="password">
                            Terms
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name='password' />
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