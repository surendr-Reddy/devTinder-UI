import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const UpdateProfile =()=>{
  const profileUserData= useSelector(store=>store.user)

  const detailsRef = useRef(null);
  const handleSelect = (value) => {
    setGender(value);
    // Close the dropdown by removing the open attribute
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
  };
   // Close dropdown if clicking outside
   useEffect(() => {
    function handleClickOutside(event) {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(event.target)
      ) {
        detailsRef.current.removeAttribute('open');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const[firstName,setFirstName]=useState(profileUserData.firstName || "")
  const[lasttName,setLastName]=useState(profileUserData.lastName|| "")
  const[age,setAge]=useState(profileUserData.age || "")
  const[about,setAbout]=useState(profileUserData.about|| "")
  const[photoUrl,setPhotoUrl]=useState(profileUserData.photoUrl|| "")
  const[skills,setSkills]=useState(profileUserData.skills|| "")
  const[gender,setGender]=useState(profileUserData.gender|| "")
  console.log(profileUserData);
  

    return (<div className=" flex justify-around ">

<div className="card bg-base-200 w-96 shadow-sm my-10">
    
  <div className="card-body">
    <h2 className="card-title">Edit Profile</h2>
    <fieldset className="fieldset">
    <legend className="fieldset-legend">FirstName</legend>
    <input type="text" placeholder="firstName" className="input input-sm"  value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
    </fieldset>

    <fieldset className="fieldset">
    <legend className="fieldset-legend">LastName</legend>
    <input type="text" placeholder="LastName" className="input input-sm" value={lasttName} onChange={(e)=>setLastName(e.target.value)}/>
    </fieldset>
    
    <div className="flex gap-2 ">

    <fieldset className="fieldset">
    <legend className="fieldset-legend">Gender</legend>
    <details ref={detailsRef} className="dropdown">
      <summary className="btn btn-sm bg-base-100 cursor-pointer w-38">{gender}</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-40 p-2 shadow-sm">
        <li><a onClick={() => handleSelect('Male')}>Male</a></li>
        <li><a onClick={() => handleSelect('Female')}>Female</a></li>
        <li><a onClick={() => handleSelect('Other')}>Other</a></li>
      </ul>
    </details>
    </fieldset>
    <fieldset className="fieldset">
    <legend className="fieldset-legend">Age</legend>
    <input type="text" placeholder="age" className="input input-sm" value={age} onChange={(e)=>setAge(e.target.value)}/>
    </fieldset> 
    </div>

    <fieldset className="fieldset">
    <legend className="fieldset-legend">PhotoUrl</legend>
    <input type="text" placeholder="photourl" className="input input-sm" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)}/>
    </fieldset>

    <fieldset className="fieldset">
    <legend className="fieldset-legend">Skills</legend>
    <input type="text" placeholder="Skills" className="input input-sm" value={skills} onChange={(e)=>setSkills(e.target.value)}/>
    </fieldset>
    
   
    <fieldset className="fieldset">
     <legend className="fieldset-legend">Your bio</legend>
     <textarea className="textarea h-12" placeholder="Bio" value={about} onChange={(e)=>setAbout(e.target.value)}></textarea>
    </fieldset>
   
    <div className="card-actions justify-end">
      <button className="btn btn-wide btn-primary">Update</button>
    </div>
  </div>
</div>

<div>

</div>
        
    </div>) 

}
export default UpdateProfile;