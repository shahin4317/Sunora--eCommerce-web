import { authClient } from '@/lib/auth-client';
import React from 'react';
import { BiEdit } from 'react-icons/bi';

const UpdateUser = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value

        await authClient.updateUser({
            name,
            image,
        })


    }

    return (
        <div className='text-center mt-5'>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-outline" onClick={() => document.getElementById('my_modal_1').showModal()}> <BiEdit></BiEdit> Uptade Information</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form className="space-y-5" onSubmit={onSubmit}>
                        {/* name */}
                        <div className="relative">
                            <label className="block text-sm font-semibold mb-2 text-left">
                                Name
                            </label>

                            <input
                                name='name'

                                placeholder="Enter Your New Name"
                                className="input input-bordered w-full pr-12"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2 text-left">
                                Image URL

                            </label>

                            <input
                                type="text"
                                name='image'
                                placeholder="Enter your Photo URL"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <button slot='close' type='submit' className="btn btn-outline">Save</button>

                        <form method="dialog" className="modal-backdrop">
                            <div className="modal-action">
                                <button slot='close' className="btn">Close</button>

                                {/* if there is a button in form, it will close the modal */}

                            </div>
                        </form>
                    </form>

                </div>
            </dialog>

        </div>
    );
};

export default UpdateUser;