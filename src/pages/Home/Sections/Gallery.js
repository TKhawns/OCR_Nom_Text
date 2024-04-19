import './Gallery.scss';
import Slider from 'react-slick';

function Gallery() {
    let settings = {
        dots: true,
        //infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
    };
    return (
        <div className="gallery-container">
            <div className="gallery-content">
                <div className="gallery-header">Sản phẩm</div>
                <div className="gallery-grid-tab">
                    <div className="gallery-grid">
                        <div className="gallery-col">
                            <img
                                className="image1"
                                src="https://res.datatang.com/asset/productNew/datatang-image/APY220802001.jpg?Expires=2008138933&OSSAccessKeyId=LTAI5tQwXnJZbubgVfVa1ep9&Signature=hzcYYHeygygTG7WEyOMCcCWDXvI%3D"
                            />
                        </div>
                        <div className="gallery-col1">
                            <img
                                className="image"
                                src="https://picx.zhimg.com/v2-2ecae3d442e1c2b6d56a25d6a8dbdd43_720w.jpg?source=172ae18b"
                            />
                        </div>
                        <div className="gallery-col1">
                            <img
                                className="image"
                                src="https://picx.zhimg.com/v2-2ecae3d442e1c2b6d56a25d6a8dbdd43_720w.jpg?source=172ae18b"
                            />
                        </div>
                        <div className="gallery-col1">
                            <img
                                className="image"
                                src="https://picx.zhimg.com/v2-2ecae3d442e1c2b6d56a25d6a8dbdd43_720w.jpg?source=172ae18b"
                            />
                        </div>
                        <div className="gallery-col1">
                            <img
                                className="image"
                                src="https://picx.zhimg.com/v2-2ecae3d442e1c2b6d56a25d6a8dbdd43_720w.jpg?source=172ae18b"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
