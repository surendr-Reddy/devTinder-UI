const UpdateProfile =()=>{
    return (<div className=" flex justify-around my-10">

<div className="card bg-base-200 w-96 shadow-sm">
    
  <div className="card-body">
    <h2 className="card-title">Edit Profile</h2>
    <fieldset className="fieldset">
    <legend className="fieldset-legend">FirstName</legend>
    <input type="text" placeholder="firstName" className="input input-md"/>
    </fieldset>

    <fieldset className="fieldset">
    <legend className="fieldset-legend">LastName</legend>
    <input type="text" placeholder="LastName" className="input input-md"/>
    </fieldset>
    
    
    <fieldset className="fieldset">
    <legend className="fieldset-legend">Age</legend>
    <input type="text" placeholder="age" className="input input-md"/>
    </fieldset> 


    <fieldset className="fieldset">
    <legend className="fieldset-legend">gender</legend>
    <input type="text" placeholder="gender" className="input input-md"/>
    </fieldset>


    <fieldset className="fieldset">
    <legend className="fieldset-legend">photoUrl</legend>
    <input type="text" placeholder="photourl" className="input input-md"/>
    </fieldset>

    <fieldset className="fieldset">
    <legend className="fieldset-legend">Skills</legend>
    <input type="text" placeholder="Skills" className="input input-md"/>
    </fieldset>
    
   
    <fieldset className="fieldset">
     <legend className="fieldset-legend">Your bio</legend>
     <textarea className="textarea h-24" placeholder="Bio"></textarea>
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