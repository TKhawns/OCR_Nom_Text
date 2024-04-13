import './Footer.scss';
function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img
                        className="image-uet"
                        src="https://www.fit.uet.vnu.edu.vn/wp-content/themes/fit2019/images/fit-logo.svg"
                        alt=""
                    />
                </div>
                <div className="information">
                    <div className="top-info">
                        <div>FACULTY OF INFORMATION TECHNOLOGY</div>
                        <div>VNU-University of Engineering and Technology - VNU</div>
                    </div>
                    <div>Address: Room No. 301 - E3 Building, 144 - Xuan Thuy</div>
                    <div>Cau Giay, Ha Noi, Viet Nam</div>
                    <div>Telephone: (024)37547064</div>
                    <div>Email: fit@vnu.edu.vn</div>
                </div>
                <div className="contact-social">
                    <div>Liên hệ với chúng tôi</div>
                    <div className="logo">
                        <div className="facebook-logo">Facebook</div>
                        <div className="youtube-logo">Youtube</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
