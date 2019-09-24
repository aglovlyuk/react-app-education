import React from 'react';

import IssueItem from "../components/IssueItem";
import Issues from "../data/issues";

class OpenedIssues extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            issuesItems: []
        };
    }

    render() {
        return (
            <div className="col-lg-7">
                <h3 className="block-title">OPEN ISSUES</h3>

                <div className="cards-issues">
                    <div className="row">
                        {Issues && Issues.map( item => <IssueItem key={`${item.id}`} {...item}/> )}
                    </div>
                </div>
            </div>
        )
    }
}

export default OpenedIssues;
