import React from "react";

const Pagination = () => {
    return (
        <React.Fragment>

            <div className="pagination">
                <ul className="pagination-list">
                    <li className="is-active"><a href="1">1</a></li>
                    <li><a href="2">2</a></li>
                    <li><a href="3">3</a></li>
                    <li><a href="4">4</a></li>
                </ul>
                <a href="next" className="btn-next" aria-label="Next">
                    <svg className="icon icon-arrow"><use xlinkHref="#icon-arrow"></use></svg>
                </a>
            </div>

        </React.Fragment>
    )
};

export default Pagination;