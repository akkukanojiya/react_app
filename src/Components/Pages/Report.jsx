

const Report = () => {


    return (
        <>

            <h1 style={{margin:'5px',padding:'3px'}}>AkAsh</h1>

            <div className="profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <img height={170} width={200} src="profile.webp" alt="" /> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:'40px',width:'150px',fontSize:'15px',lineHeight:'10px'}} type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />

                        </div>
                        <div className="col-md-6">
                            <div className="profile_head">
                                <h5 >Akash Kumar</h5>
                                <h6>Web Developer</h6>
                                <p className="profile-rating mt-3 mb-5">Ranking: <span>1/10</span></p>
                                <ul className="nav nav-tabs" role="tablist" style={{backgroundColor:'white'}}>
                                    <li className="li_about">
                                        <a className="about" aria-current="page" id="home-tab" data-toggle='tab' href="#home" role="tab">About</a>
                                    </li>
                                    <li className="li_timeline">
                                        <a className="timeline" aria-current="page" id="profile-tab" data-toggle='tab' href="#profile" role="tab">Timeline</a>
                                    </li>
                                    
                                </ul>
                            </div>
                          <div>
                            {/* <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" /> */}
                          </div>
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}
export default Report;