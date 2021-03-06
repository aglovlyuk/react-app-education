import React from "react";

const Pagination = () => {
    return (
        <div className="pagination">
            <ul className="pagination-list">
                <li className="is-active"><a href="/">1</a></li>
                <li><a href="/">2</a></li>
                <li><a href="/">3</a></li>
                <li><a href="/">4</a></li>
            </ul>
            <a href="/" className="btn-next" aria-label="Next">
                <svg className="icon icon-arrow"><use xlinkHref="#icon-arrow"></use></svg>
            </a>
        </div>
    )
};

export default Pagination;
