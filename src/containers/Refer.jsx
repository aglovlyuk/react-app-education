import React from 'react';

class Refer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Refer: []
        };
    }

    render() {
        return (
            <div className="col-lg-5 d-flex flex-column">
                <h3 className="block-title">REFER A FRIEND</h3>
                <div className="refer-card flex-grow-1">
                    <h3 className="refer-card__ttl">Refer a friend</h3>
                    <p className="refer-card__txt">Lorem ipsum dolor sit amet consectetur adipi</p>

                    <form action="">
                        <div className="mb-5 form-control-wrap">
                            <svg className="icon icon-man"><use xlinkHref="#icon-man"></use></svg>
                            <input className="form-control" type="email" name="" placeholder="example@email.com" id="" />
                        </div>

                        <div className="refer-card__footer d-flex align-items-center">
                            <button className="refer-card__cta btn-primary" type="submit">SEND</button>
                            <p className="mb-0">Or create an <a href="/">invite code</a></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Refer;
