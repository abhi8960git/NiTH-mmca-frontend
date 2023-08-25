import React, { useState } from 'react'
import Image from 'next/image';
import img from '../../public/images/img.svg';

// Rust Enum for Hostels
// Rust Enum for Hostels with associated string values
enum Hostel {
    KailashBoysHostel = "Kailash Boys Hostel",
    HimadriBoysHostel = "Himadri Boys Hostel",
    HimgiriBoysHostel = "Himgiri Boys Hostel",
    UdaygiriBoysHostel = "Udaygiri Boys Hostel",
    NeelkanthBoysHostel = "Neelkanth Boys Hostel",
    DhauladharBoysHostel = "Dhauladhar Boys Hostel",
    VindhyachalBoysHostel = "Vindhyachal Boys Hostel",
    ShivalikBoysHostel = "Shivalik Boys Hostel",
    AmbikaGirlsHostel = "Ambika Girls Hostel",
    ParvatiGirlsHostel = "Parvati Girls Hostel",
    ManimaheshGirlsHostel = "Manimahesh Girls Hostel",
    AravaliGirlsHostel = "Aravali Girls Hostel",
    SatpuraFacultyHostel = "Satpura Faculty Hostel",
}




const LoginCard = () => {
    const [selectedRole, setSelectedRole] = useState(Hostel.NeelkanthBoysHostel);
    function handleRoleChange(event: any) {
        setSelectedRole(event.target.value);
    }
    return (
        
                <div className="login-container shadow-lg bg-slate-300 rounded-xl">
                    <p className="title">Welcome </p>
                    <div className="separator"></div>
                    <p className="welcome-message">Please, provide login credentials to proceed</p>

                    <form className="login-form">
                        <div className="form-control">
                            <select value={selectedRole} onChange={handleRoleChange} className='bg-[#e6e6e6] text-[#9ca39f] w-full p-4 rounded-full outline-none px-[60px] text-[1.1em] '>
                                {Object.values(Hostel).map((role) => (
                                    <option key={role} value={role} >
                                        {role}
                                    </option>
                                ))}
                            </select>
                        </div>
                       
                        <div className="form-control">
                            <input type="password" placeholder="Password" />
                            <i className="fas fa-lock"></i>
                        </div>

                        <button className="submit"  >Login</button>
                    </form>
                </div>
         
    )
}

export default LoginCard