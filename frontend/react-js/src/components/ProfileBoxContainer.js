import '../App.css';

function ProfileBoxContainer() {
  return (
    <div class="profile-box-container h-50p">
        <div class="px-2 d-flex h-100 h-50p">
            <div class="d-flex h-50p align-items-center">
                <img src="assets/users/user-picture-guest.png" class="profile-avatar-image" alt="profile"/>
            </div>
            <div class="d-flex mx-2 h-50p align-items-center">
                <div class="profile-box-name align-items-center">
                    Guest
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProfileBoxContainer;