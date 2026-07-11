import "./Profile.css";

function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="profile-page">

      <div className="profile-card">

        <h2>My Profile</h2>

        <div className="profile-row">
          <span>Full Name</span>
          <strong>{user?.name}</strong>
        </div>

        <div className="profile-row">
          <span>Email</span>
          <strong>{user?.email}</strong>
        </div>

        <div className="profile-row">
          <span>Role</span>
          <strong>Investor</strong>
        </div>

        <div className="profile-row">
          <span>Wallet</span>
          <strong>0xA71F...91BC</strong>
        </div>

        <div className="profile-row">
          <span>Status</span>
          <strong className="verified">
            Verified
          </strong>
        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>

    </div>

  );

}

export default Profile;