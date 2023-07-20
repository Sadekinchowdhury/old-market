// import React from 'react';
// import { AiOutlineCamera, AiOutlineEdit } from 'react-icons/ai'
// import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import { message, Upload } from 'antd';


// const getBase64 = (img, callback) => {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
// };
// const beforeUpload = (file) => {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//         message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
// };
// const ProfileEdit = () => {

//     const [social, setSosial] = useState('')

//     const [formData, setFormData] = useState({
//         fieldName1: '',
//         fieldName2: '',
//     });
//     console.log(formData)

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

//         <div className='h-screen'>
//             <div className='bg-pink-900 from-blue-900 to-slate-800 via-orange-900 bg-gradient-to-t  shadow-2xl mt-3 rounded-xl w-11/12 mx-auto p-3 '>

//                 <div className='flex justify-between p-10'>
//                     <div>
//                         <h1 className='text-3xl text-white font-semibold'>Profile</h1>
//                     </div>
//                     <div className='flex justify-between'>
//                         <AiOutlineEdit className='' onClick={() => window.my_modal_3.showModal()} size={35} color='white' />

//                         {
//                             <dialog id="my_modal_3" className="modal">

//                                 <form method="dialog" className="modal-box p-2 lg:px-8">
//                                     <div className='flex justify-center items-center py-6'>

//                                         <div>
//                                             <Upload
//                                                 name="avatar"
//                                                 listType="picture-circle"
//                                                 className="avatar-uploader"
//                                                 showUploadList={false}
//                                                 action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//                                                 beforeUpload={beforeUpload}
//                                                 onChange={handleChange}
//                                             >
//                                                 {imageUrl ? (
//                                                     <img
//                                                         src={imageUrl}
//                                                         alt="avatar"
//                                                         className=''
//                                                         style={{
//                                                             width: '100%',
//                                                         }}
//                                                     />
//                                                 ) : (
//                                                     uploadButton
//                                                 )}
//                                             </Upload>
//                                         </div>

//                                     </div>
//                                     <button onClick={() => window.my_modal_3.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                                     <div className=''>
//                                         <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
//                                             <div className=''>
//                                                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//                                                     Full Name
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     name="fullName"
//                                                     id="fullName"
//                                                     autoComplete="name"


//                                                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                                     Email
//                                                 </label>
//                                                 <input
//                                                     type="email"
//                                                     name="email"
//                                                     id="email"
//                                                     autoComplete="email"


//                                                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className='w-full lg:w-1/2'>
//                                             <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                                                 Phone Number
//                                             </label>
//                                             <input
//                                                 type="tel"
//                                                 name="phoneNumber"
//                                                 id="phoneNumber"
//                                                 autoComplete="tel"



//                                                 className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                             />
//                                         </div>
//                                         <div>
//                                             <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
//                                                 Address 1
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name="address1"
//                                                 id="address1"
//                                                 autoComplete="address-line1"


//                                                 className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                             />
//                                         </div>
//                                         <div>
//                                             <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
//                                                 Address 2
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name="address2"
//                                                 id="address2"
//                                                 autoComplete="address-line2"

//                                                 className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                             />
//                                         </div>
//                                         <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
//                                             <div>
//                                                 <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
//                                                     Date of Birth
//                                                 </label>
//                                                 <input
//                                                     type="date"
//                                                     name="dateOfBirth"
//                                                     id="dateOfBirth"



//                                                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//                                                     Country
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     name="country"
//                                                     id="country"
//                                                     autoComplete="country"


//                                                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
//                                             <div>
//                                                 <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                                                     City
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     name="city"
//                                                     id="city"
//                                                     autoComplete="address-level2"


//                                                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
//                                                     Zip Code
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     name="zipCode"
//                                                     id="zipCode"
//                                                     autoComplete="postal-code"


//                                                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="col-span-2 flex items-center py-4 space-x-2">
//                                             <form className='flex items-center py-4 space-x-2' onChange={handleChange} >
//                                                 <input
//                                                     type="text"
//                                                     name="social"
//                                                     id="zipCode"
//                                                     value={formData.social}
//                                                     placeholder="Add social media"
//                                                     autoComplete="postal-code"


//                                                     className="mt-1 relative p-2 block w-1/3 sm:w-[70%] border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                                 />
//                                                 <select id="social-media" name="social-media" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
//                                                     <option value="facebook">Facebook</option>
//                                                     <option value="twitter">Twitter</option>
//                                                     <option value="instagram">Instagram</option>
//                                                     <option value="linkedin">LinkedIn</option>
//                                                 </select>
//                                                 <div className="bg-blue-800 py-1 px-2 text-white rounded-[5px]">
//                                                     <button

//                                                         type='submit'>Add</button>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                         <div className="col-span-2">
//                                             <label htmlFor="education" className="block text-sm font-medium text-gray-700">
//                                                 Educational Qualification
//                                             </label>
//                                             <textarea
//                                                 name="education"
//                                                 id="education"
//                                                 rows="3"



//                                                 className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                                             ></textarea>
//                                         </div>

//                                         <div className="col-span-2 flex justify-end py-3">

//                                             <button
//                                                 type="submit"
//                                                 className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                                             >
//                                                 Submit
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </dialog>
//                         }


//                     </div>
//                 </div>

//                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
//                     <div className='flex items-center justify-center'>
//                         <div>
//                             <img className='h-52 w-52 rounded-full' src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=740&t=st=1688743360~exp=1688743960~hmac=3ab12c63c932e4328be04a3360e3751d0ff7fa79e5a1500f6c27dc33117fc6fc" alt="" />


//                             <div className='flex justify-center my-10 gap-4 text-yellow-400'>
//                                 <Link to={formData.social}> <FaFacebookSquare size={24} /></Link>
//                                 <FaInstagramSquare size={24} />
//                                 <FaTwitterSquare size={24} />
//                                 <FaLinkedin size={24} />
//                                 <FaGithubSquare size={24} />
//                             </div>
//                         </div>

//                     </div>
//                     <div>
//                         <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
//                             <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
//                                 <label htmlFor="" className=' font-normal'>Full Name</label>
//                                 <p className='text-xl font-medium'>Sadekin Chowdhury</p>
//                             </div>
//                             <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
//                                 <label htmlFor="" className=' font-normal'>Email Adress</label>
//                                 <p className='text-xl font-medium'>Sadek124@gmail.com</p>
//                             </div>
//                             <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
//                                 <label htmlFor="" className=' font-normal'>Date of birth</label>
//                                 <p className='text-xl font-medium'> 11/12/2000</p>
//                             </div>
//                             <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
//                                 <label htmlFor="" className=' font-normal'> Educational Qualification</label>
//                                 <p className='text-xl font-medium'>Bachalor Of Science</p>
//                             </div>
//                         </div>


//                         <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
//                             <label htmlFor="" className=' font-normal'>Streat Adress line 1</label>
//                             <p className='text-xl font-medium'> </p>
//                         </div>
//                         <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
//                             <label htmlFor="" className=' font-normal'>Streat Adress line 2</label>
//                             <p className='text-xl font-medium'> </p>
//                         </div>
//                         <div className='grid grid-cols-1 md:grid-cols-2'>
//                             <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
//                                 <label htmlFor="" className=' font-normal'>Country</label>
//                                 <p className='text-xl font-medium'> Bangladesh</p>
//                             </div>
//                             <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
//                                 <label htmlFor="" className=' font-normal'>Contact Info</label>
//                                 <p className='text-xl font-medium'> +8801720985568</p>
//                             </div>
//                             <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
//                                 <label htmlFor="" className=' font-normal'> City</label>
//                                 <p className='text-xl font-medium'> Sylhet</p>
//                             </div>
//                             <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
//                                 <label htmlFor="" className=' font-normal'> Zip Code</label>
//                                 <p className='text-xl font-medium'> 3040</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>


//             </div >
//         </div>


//     );
// };

// export default ProfileEdit;


import React from 'react';
import { AiOutlineCamera, AiOutlineEdit } from 'react-icons/ai'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';


const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
const ProfileEdit = () => {

    const [social, setSosial] = useState('')

    const [formData, setFormData] = useState({
        fieldName1: '',
        fieldName2: '',
    });
    console.log(formData)

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (

        <div className='bg-pink-900 from-blue-900 to-slate-800 via-orange-900 bg-gradient-to-t shadow-2xl mt-3 rounded-xl w-11/12 mx-auto p-3 '>

            <div className='flex justify-between p-10'>
                <div>
                    <h1 className='text-3xl text-white font-semibold'>Profile</h1>
                </div>
                <div className='flex justify-between'>
                    <AiOutlineEdit className='' onClick={() => window.my_modal_3.showModal()} size={35} color='white' />

                    {
                        <dialog id="my_modal_3" className="modal">

                            <form method="dialog" className="modal-box p-2 lg:px-8">
                                <div className='flex justify-center items-center py-6'>
                                    {/* <input type="file" />
                                    <AiOutlineCamera className='p-3 rounded-full border-[1px] border-black  bg-black' color='white' size={70} /> */}
                                    <div>
                                        <Upload
                                            name="avatar"
                                            listType="picture-circle"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            beforeUpload={beforeUpload}
                                            onChange={handleChange}
                                        >
                                            {imageUrl ? (
                                                <img
                                                    src={imageUrl}
                                                    alt="avatar"
                                                    className=''
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                />
                                            ) : (
                                                uploadButton
                                            )}
                                        </Upload>
                                    </div>

                                </div>
                                <button onClick={() => window.my_modal_3.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <div className=''>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                        <div className=''>
                                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                id="fullName"
                                                autoComplete="name"


                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                autoComplete="email"


                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full lg:w-1/2'>
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            autoComplete="tel"



                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
                                            Address 1
                                        </label>
                                        <input
                                            type="text"
                                            name="address1"
                                            id="address1"
                                            autoComplete="address-line1"


                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
                                            Address 2
                                        </label>
                                        <input
                                            type="text"
                                            name="address2"
                                            id="address2"
                                            autoComplete="address-line2"

                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                        <div>
                                            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                                                Date of Birth
                                            </label>
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                id="dateOfBirth"



                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                name="country"
                                                id="country"
                                                autoComplete="country"


                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                        <div>
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"


                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                                                Zip Code
                                            </label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                id="zipCode"
                                                autoComplete="postal-code"


                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-2 flex items-center py-4 space-x-2">
                                        <form className='flex items-center py-4 space-x-2' onChange={handleChange} >
                                            <input
                                                type="text"
                                                name="social"
                                                id="zipCode"
                                                value={formData.social}
                                                placeholder="Add social media"
                                                autoComplete="postal-code"


                                                className="mt-1 relative p-2 block w-1/3 sm:w-[70%] border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                            <select id="social-media" name="social-media" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                                <option value="facebook">Facebook</option>
                                                <option value="twitter">Twitter</option>
                                                <option value="instagram">Instagram</option>
                                                <option value="linkedin">LinkedIn</option>
                                            </select>
                                            <div className="bg-blue-800 py-1 px-2 text-white rounded-[5px]">
                                                <button

                                                    type='submit'>Add</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                                            Educational Qualification
                                        </label>
                                        <textarea
                                            name="education"
                                            id="education"
                                            rows="3"



                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        ></textarea>
                                    </div>

                                    <div className="col-span-2 flex justify-end py-3">

                                        <button
                                            type="submit"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </dialog>
                    }


                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='flex items-center justify-center'>
                    <div>
                        <img className='h-52 w-52 rounded-full' src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=740&t=st=1688743360~exp=1688743960~hmac=3ab12c63c932e4328be04a3360e3751d0ff7fa79e5a1500f6c27dc33117fc6fc" alt="" />


                        <div className='flex justify-center my-10 gap-4 text-yellow-400'>
                            <Link to={formData.social}> <FaFacebookSquare size={24} /></Link>
                            <FaInstagramSquare size={24} />
                            <FaTwitterSquare size={24} />
                            <FaLinkedin size={24} />
                            <FaGithubSquare size={24} />
                        </div>
                    </div>

                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
                        <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                            <label htmlFor="" className=' font-normal'>Full Name</label>
                            <p className='text-xl font-medium'>Sadekin Chowdhury</p>
                        </div>
                        <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                            <label htmlFor="" className=' font-normal'>Email Adress</label>
                            <p className='text-xl font-medium'>Sadek124@gmail.com</p>
                        </div>
                        <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                            <label htmlFor="" className=' font-normal'>Date of birth</label>
                            <p className='text-xl font-medium'> 11/12/2000</p>
                        </div>
                        <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                            <label htmlFor="" className=' font-normal'> Educational Qualification</label>
                            <p className='text-xl font-medium'>Bachalor Of Science</p>
                        </div>
                    </div>


                    <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                        <label htmlFor="" className=' font-normal'>Streat Adress line 1</label>
                        <p className='text-xl font-medium'> </p>
                    </div>
                    <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                        <label htmlFor="" className=' font-normal'>Streat Adress line 2</label>
                        <p className='text-xl font-medium'> </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                            <label htmlFor="" className=' font-normal'>Country</label>
                            <p className='text-xl font-medium'> Bangladesh</p>
                        </div>
                        <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                            <label htmlFor="" className=' font-normal'>Contact Info</label>
                            <p className='text-xl font-medium'> +8801720985568</p>
                        </div>
                        <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                            <label htmlFor="" className=' font-normal'> City</label>
                            <p className='text-xl font-medium'> Sylhet</p>
                        </div>
                        <div className='lg:text-left pl-8 lg:pl-0 text-white mb-3'>
                            <label htmlFor="" className=' font-normal'> Zip Code</label>
                            <p className='text-xl font-medium'> 3040</p>
                        </div>
                    </div>

                </div>
            </div>


        </div >

    );
};

export default ProfileEdit;