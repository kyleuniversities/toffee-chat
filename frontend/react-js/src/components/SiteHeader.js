import '../App.css';
import ProfileBoxContainer from './ProfileBoxContainer';

function SiteHeader() {
    // Handlers
    const blockUserChange = () => {
        alert('Toffeechat V1 web users shall only use Toffeechat as the Guest user')
    }

    // Return Component
    return (
        <div class="site-header-area">
            <div class="mx-2 px-3 py-2 d-flex h-100 h-50p" onClick={blockUserChange}>
                <div class="d-flex h-50p">
                    <img src="assets/icon-lg.png" class="pt-0 logo" alt="site-logo"/>
                </div>
                <div class="d-flex mt-1 ml-2 h-50p">
                    <div class="site-header h-100">
                        Toffeechat
                    </div>
                </div>
                <ProfileBoxContainer />
            </div>
        </div>
    );
}

export default SiteHeader;