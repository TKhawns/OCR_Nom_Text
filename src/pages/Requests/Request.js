import { useEffect, useMemo, useState } from 'react';
import Footer from '../ShareComponent/Footer/Footer';
import Header from '../ShareComponent/Header/Header';
import Pagination from '../Yourmodel/Pagtination';
import './Request.scss';
import data from '../Yourmodel/MockData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

let PageSize = 20;
function RequestPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    useEffect(() => {
        document.title = 'Danh sách yêu cầu';
    });

    const userRedux = JSON.parse(localStorage.getItem('persist:user'));
    let userData = JSON.parse(userRedux.authSlice).user;
    return (
        <div>
            <Header />

            <div className="request-container">
                <div className="request-content">
                    <div className="request-title">Danh sách yêu cầu</div>
                    {userData ? (
                        <div className="request-table">
                            <div className="section">
                                <div className="filter">
                                    <div className="filter-form">
                                        <div className="col1">
                                            <input className="form-control" type="text" placeholder="Từ khóa" />
                                        </div>
                                        <div className="col1">
                                            <select className="form-select" type="text" placeholder="Trạng thái">
                                                <option value="0" selected>
                                                    Trạng thái
                                                </option>
                                                <option value="1">Chờ xử lý</option>
                                                <option value="2">Đã duyệt</option>
                                                <option value="3">Bị từ chối</option>
                                            </select>
                                        </div>
                                        <div className="col1">
                                            <button className="search-button" type="submit">
                                                Tìm kiếm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-content">
                                    <div className="top-content">
                                        <div className="table-header">
                                            <div className="row">
                                                <div className="row-data">#</div>
                                                <div className="row-data1">Họ tên</div>
                                                <div className="row-data1">Tên mô hình</div>
                                                <div className="row-data1">Trạng thái</div>
                                                <div className="row-data1">Tải về</div>
                                                <div className="row-data1">Duyệt</div>
                                            </div>
                                        </div>
                                        <div className="table-body">
                                            {currentTableData.map((item) => {
                                                return (
                                                    <div className="body-row">
                                                        <div className="body-row-data">
                                                            <span>{item.number}</span>
                                                        </div>
                                                        <div className="body-row-data1">
                                                            <span>{item.date}</span>
                                                        </div>

                                                        <div className="body-row-data1">
                                                            <span>{item.name}</span>
                                                        </div>

                                                        <div className="body-row-data1">
                                                            <span>{item.status}</span>
                                                        </div>
                                                        <div className="body-row-data1">
                                                            <span>
                                                                <FontAwesomeIcon
                                                                    className="download"
                                                                    icon={faCircleDown}
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="body-button">
                                                            <button className="ok-button">Đồng ý</button>
                                                            <button className="reject-button">Từ chối</button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="pagination-container">
                                            <Pagination
                                                className="pagination-bar"
                                                currentPage={currentPage}
                                                totalCount={data.length}
                                                pageSize={PageSize}
                                                onPageChange={(page) => setCurrentPage(page)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="notuser">Chỉ Quản trị viên mới có thể phê duyệt yêu cầu!</div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RequestPage;
