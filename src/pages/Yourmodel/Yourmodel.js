import { useEffect, useMemo, useState } from 'react';
import Footer from '../ShareComponent/Footer/Footer';
import Header from '../ShareComponent/Header/Header';
import './Yourmodel.scss';
import data from './MockData.json';
import Pagination from './Pagtination';

let PageSize = 20;
function Yourmodel() {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    useEffect(() => {
        document.title = 'Mô hình của bạn';
    });

    const userRedux = JSON.parse(localStorage.getItem('persist:user'));
    let userData = JSON.parse(userRedux.authSlice).user;

    return (
        <div>
            <Header />

            <div className="yourmodel-container">
                <div className="yourmodel-content">
                    <div className="yourmodel-title">Danh sách mô hình</div>
                    {userData ? (
                        <div className="yourmodel-table">
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
                                                <div className="row-data1">Ngày tạo</div>
                                                <div className="row-data1">Tên mô hình</div>
                                                <div className="row-data1">Trạng thái</div>
                                                <div className="row-data1">Thông tin</div>
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
                                                        <div className="body-button">
                                                            <a className="infor-link" href="" role="button">
                                                                {item.link}
                                                            </a>
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
                        <div className="notuser">
                            Bạn chưa có mô hình nào. Hãy đăng nhập để sở hữu và đào tạo mô hình của bạn !
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Yourmodel;
