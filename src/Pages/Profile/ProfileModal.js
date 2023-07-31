// import { Upload, message } from 'antd';
// import React, { useState } from 'react';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

// const ProfileModal = () => {

//     const getBase64 = (img, callback) => {
//         const reader = new FileReader();
//         reader.addEventListener('load', () => callback(reader.result));
//         reader.readAsDataURL(img);
//     };
//     const beforeUpload = (file) => {
//         const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//         if (!isJpgOrPng) {
//             message.error('You can only upload JPG/PNG file!');
//         }
//         const isLt2M = file.size / 1024 / 1024 < 2;
//         if (!isLt2M) {
//             message.error('Image must smaller than 2MB!');
//         }
//         return isJpgOrPng && isLt2M;
//     };
//     const [formData, setFormData] = useState({
//         fieldName1: '',
//         fieldName2: '',
//     });
//   

//     const [loading, setLoading] = useState(false);
//     const [imageUrl, setImageUrl] = useState();
//     const handleChange = (info) => {
//         if (info.file.status === 'uploading') {
//             setLoading(true);
//             return;
//         }
//         if (info.file.status === 'done') {
//             // Get this url from response in real world.
//             getBase64(info.file.originFileObj, (url) => {
//                 setLoading(false);
//                 setImageUrl(url);
//             });
//         }
//     };
//     const uploadButton = (
//         <div>
//             {loading ? <LoadingOutlined /> : <PlusOutlined />}
//             <div
//                 style={{
//                     marginTop: 8,
//                 }}
//             >
//                 Upload
//             </div>
//         </div>
//     );
//     return (
//         <div>
//             <div className='flex justify-between'>
//                 <AiOutlineEdit className='' onClick={() => window.my_modal_3.showModal()} size={35} color='white' />

//                 {
//                     <label id="my_modal_3" className="modal my_modal_3">

//                         <form method="dialog" className="modal-box p-2 lg:px-8">
//                             <div className='flex justify-center items-center py-6'>
//                                 {/* <input type="file" />
//                                     <AiOutlineCamera className='p-3 rounded-full border-[1px] border-black  bg-black' color='white' size={70} /> */}
//                                 <div>
//                                     <Upload
//                                         name="avatar"
//                                         listType="picture-circle"
//                                         className="avatar-uploader"
//                                         showUploadList={false}
//                                         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//                                         beforeUpload={beforeUpload}
//                                         onChange={handleChange}
//                                     >
//                                         {imageUrl ? (
//                                             <img
//                                                 src={imageUrl}
//                                                 alt="avatar"
//                                                 className=''
//                                                 style={{
//                                                     width: '100%',
//                                                 }}
//                                             />
//                                         ) : (
//                                             uploadButton
//                                         )}
//                                     </Upload>
//                                 </div>

//                             </div>
//                             <button onClick={() => window.my_modal_3.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                             <div className=''>
//                                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
//                                     <div className=''>
//                                         <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//                                             Full Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="fullName"
//                                             id="fullName"
//                                             autoComplete="name"


//                                             className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                             Email
//                                         </label>
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             id="email"
//                                             autoComplete="email"


//                                             className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className='w-full lg:w-1/2'>
//                                     <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                                         Phone Number
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         name="phoneNumber"
//                                         id="phoneNumber"
//                                         autoComplete="tel"



//                                         className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
//                                         Address 1
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="address1"
//                                         id="address1"
//                                         autoComplete="address-line1"


//                                         className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
//                                         Address 2
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="address2"
//                                         id="address2"
//                                         autoComplete="address-line2"

//                                         className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                     />
//                                 </div>
//                                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
//                                     <div>
//                                         <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
//                                             Date of Birth
//                                         </label>
//                                         <input
//                                             type="date"
//                                             name="dateOfBirth"
//                                             id="dateOfBirth"



//                                             className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//                                             Country
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="country"
//                                             id="country"
//                                             autoComplete="country"


//                                             className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
//                                     <div>
//                                         <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                                             City
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="city"
//                                             id="city"
//                                             autoComplete="address-level2"


//                                             className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
//                                             Zip Code
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="zipCode"
//                                             id="zipCode"
//                                             autoComplete="postal-code"


//                                             className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-span-2 flex items-center py-4 space-x-2">
//                                     <form className='flex items-center py-4 space-x-2' onChange={handleChange} >
//                                         <input
//                                             type="text"
//                                             name="social"
//                                             id="zipCode"
//                                             value={formData.social}
//                                             placeholder="Add social media"
//                                             autoComplete="postal-code"


//                                             className="mt-1 relative p-2 block w-1/3 sm:w-[70%] border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                         />
//                                         <select id="social-media" name="social-media" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
//                                             <option value="facebook">Facebook</option>
//                                             <option value="twitter">Twitter</option>
//                                             <option value="instagram">Instagram</option>
//                                             <option value="linkedin">LinkedIn</option>
//                                         </select>
//                                         <div className="bg-blue-800 py-1 px-2 text-white rounded-[5px]">
//                                             <button

//                                                 type='submit'>Add</button>
//                                         </div>
//                                     </form>
//                                 </div>
//                                 <div className="col-span-2">
//                                     <label htmlFor="education" className="block text-sm font-medium text-gray-700">
//                                         Educational Qualification
//                                     </label>
//                                     <textarea
//                                         name="education"
//                                         id="education"
//                                         rows="3"



//                                         className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                     ></textarea>
//                                 </div>

//                                 <div className="col-span-2 flex justify-end py-3">

//                                     <button
//                                         type="submit"
//                                         className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </label>
//                 }


//             </div>
//         </div>
//     );
// };

// export default ProfileModal;



import { React, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import TextArea from 'antd/es/input/TextArea';
import { Input } from 'antd';
import { updateProfile } from 'firebase/auth';





const ProfileModal = ({ users }) => {

    const [selectOption, setSelectOption] = useState("")
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };


    const date = new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" });


    const { user } = useContext(AuthContext)
    const imageHostkeyk = `f4302ef9c1568935c87b5ca609500d68`

    const handSubmit = event => {

        event.preventDefault()
        const form = event.target
        const name = form.name.value;

        const country = form.country.value;
        const city = form.city.value;
        const zip = form.zip.vlaue;
        const phone = form.phone.value;
        const adress1 = form.adress1.value;
        const adress2 = form.adress2.value;
        const description = form.description.value;



        const formData = new FormData()
        formData.append('image', selectedFile)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkeyk}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {
                    console.log(imgData.data.url)
                }
                const userupdate = {
                    name,
                    country, city, zip,
                    adress1, adress2,
                    description,
                    phone,
                    date,
                    image: imgData.data.url,
                    productId: users._id,
                    gender: selectOption

                }


                fetch(`https://old-server.vercel.app/user/${users._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userupdate)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.modifiedCount > 0) {
                            toast.success('User Information Updated')
                        }


                    })


            })

    }




    return (

        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h1>Update Profile</h1>

                    <form onSubmit={handSubmit} className='p-0 lg:p-8'>

                        {/* my image file upload */}
                        <div className='flex items-center justify-center'>
                            <input type="file" onChange={handleFileChange}
                                className="file-input w-full max-w-xs" />

                        </div>


                        <div className='py-4 gap-3'>

                            <div className='flex items-center gap-5 py-3'>
                                <div>
                                    <label htmlFor="">Name</label>
                                    <Input type="text" defaultValue={users.name} name='name' placeholder="Full-Name"
                                        className="w-full py-2">

                                    </Input>
                                </div>

                                <select
                                    id="selectOption"
                                    value={selectOption}
                                    onChange={(e) => setSelectOption(e.target.value)}

                                    className="py-2 mt-4 px-4">
                                    <option disabled hidden selected value="" >Gender</option>
                                    <option value="man" >Man</option>
                                    <option value="women" >Women</option>

                                </select>
                            </div>
                            <div className='flex items-center gap-5 py-3'>
                                <div>
                                    <label htmlFor="">Phone</label>
                                    <Input type="number" name='phone' placeholder="Contact Number" className="w-full py-2" />
                                </div>

                                <div>
                                    <label htmlFor="">Country</label>
                                    <Input type="text" name='country' placeholder="Bangladesh" className="w-full py-2" />
                                </div>

                            </div>
                            <div className='flex items-center gap-5 py-3'>
                                <div>
                                    <label htmlFor="">City</label>
                                    <Input type="text" name='city' placeholder="City" className="w-full py-2" />
                                </div>

                                <div>
                                    <label htmlFor="">Zip Code</label>
                                    <Input type="text" name='zip' placeholder="Zip-Code" className="w-full py-2" />
                                </div>

                            </div>
                            <div>
                                <label htmlFor="">Adress 1</label>
                                <Input type="text" name='adress1' placeholder="adress1" className="w-full py-2" />
                            </div>

                            <div className='w-full py-2'>
                                <label htmlFor="">Adress 2</label>
                                <Input type="text" name='adress2' placeholder="your location " className="w-full py-2" />

                            </div>
                            <div className='w-full py-2'>
                                <label htmlFor="">Description</label>

                                <TextArea type="text" name='description' placeholder="your location" className="w-full " />

                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <input className='py-3 px-6 rounded-md border border-gray-300 text-white bg-black shadow-2xl hover:bg-gray-700 cursor-pointer' type="submit" value="submit" />
                        </div>

                    </form>
                </div>
            </div></>
    );
};

export default ProfileModal;