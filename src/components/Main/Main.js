import React, { Component } from 'react';
// import './Main.module.css'

class Main extends Component {
    render() {
        return (
            <div id="main" className="main-page active">
			<div className="main-wrapper">
				<div className="header d-flex">
					<div className="col-lg-9 col-md-8 col-sm-7">
						<div className="input-search">
						  <input type="text" name="search" placeholder="Search for transaction, invoice, help." autocomplete="off" />
						  <div className="input-icon"><i className="fa fa-search"></i></div>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-5">
						<div className="profile-wrap">
							<div className="profile d-flex">
								<div className="box">
									<i className="fas fa-calendar-alt"></i>
								</div>
								<span className="vertical-line"></span>
								<div className="box">
									<div className="profile-img">
										<img src="assets/img/bg_3.jpg" alt=" "/>
									</div>
								</div>
								<div className="box name-title">
									<span className="name">TaTu</span>
									<p className="small-text">Database Manager</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="form-title d-flex">
					<div className="input-wrap">
						<input type="text" name="form-name" placeholder="Enter Form Title" autocomplete="off" />
					</div>
					<div className="button-area">
						<button>Cancel</button>
					</div>
					<div className="button-area">
						<button>Save</button>
					</div>
				</div>
				<div className="main-wrapper d-flex">
					<div className="col-lg-9 col-md-8 col-sm-7 col-xs-6">
						<div className="editable-area">
							
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-5 col-xs-6">
						<div className="sidebar">
							<div className="search-box d-flex">
								<div className="input-box">
									<input type="text" name="" placeholder="Search for fields" />
									<div className="search-icon">
										<i className="fa fa-search"></i>
									</div>
								</div>
								<span className="chevron-right"><i className="fas fa-chevron-right"></i></span>
							</div>
							<div className="sidenav-right">
								<ul>
									<li className="item-nav">
										<div className="item-wrap d-flex">
											<div className="i-icon"><i className="fas fa-chevron-right"></i></div>
											<div className="text-item">
												<span>Text</span>
												<p>Single line or multiple line textarea</p>
											</div>
										</div>
									</li>
									<li className="item-nav">
										<div className="item-wrap d-flex">
											<div className="i-icon"><i className="fas fa-chevron-right"></i></div>
											<div className="text-item">
												<span>Select from list</span>
												<p>Choose one or more option from list</p>
											</div>
										</div>
									</li>
									<li className="item-nav">
										<div className="item-wrap d-flex">
											<div className="i-icon"><i className="fas fa-chevron-right"></i></div>
											<div className="text-item">
												<span>Single Selection</span>
												<p>Select only one item</p>
											</div>
										</div>
									</li>
									<li className="item-nav">
										<div className="item-wrap d-flex">
											<div className="i-icon"><i className="fas fa-chevron-right"></i></div>
											<div className="text-item">
												<span>Multiple Selection</span>
												<p>Select Multiple options</p>
											</div>
										</div>
									</li>
									<li className="item-nav">
										<div className="item-wrap d-flex">
											<div className="i-icon"><i className="fas fa-chevron-right"></i></div>
											<div className="text-item">
												<span>Date</span>
												<p>Select date</p>
											</div>
										</div>
									</li>
									<li className="item-nav">
										<div className="item-wrap d-flex">
											<div className="i-icon"><i className="fas fa-chevron-right"></i></div>
											<div className="text-item">
												<span>Number</span>
												<p>It accept only number</p>
											</div>
										</div>
									</li>
									<li className="item-nav">
										<div className="item-wrap d-flex">
											<div className="i-icon"><i className="fas fa-chevron-right"></i></div>
											<div className="text-item">
												<span>Upload</span>
												<p>Upload document or media</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        )
    }
}


export default Main