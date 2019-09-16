import React, { Component } from 'react'
// import './SideBar.module.css'

class Sidebar extends Component {
    render() {
        return (
            <nav id="sidenav" class="sidenav-wrapper">
			<div className="sidenav-inner">
				<div className="sidenav-brand">
					<span>Logo.</span>
				</div>
				<div className="sidenav-menu">
					<div className="title-box">
						<span className="title-icon"><i className="fas fa-th"></i></span>
						<span className="title-text">Dasboard</span>
					</div>
					<ul>
						<li className="title-menu"><span>LOGISTICS</span></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">Order Entry</span></a></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">Planer</span></a></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">Dispatch Board</span></a></li>

						<li className="title-menu"><span>ACCOUNTING</span></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">Taxes</span></a></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">IFTA</span></a></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">AR/AP</span></a></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">Driver Payroll</span></a></li>

						<li className="title-menu"><span>SERVICES</span></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">Purchase Order</span></a></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">Maintenance</span></a></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">Quotation</span></a></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">Vendor Management</span></a></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title"> Database Maintenance</span></a></li>
					</ul>
					<div className="collapse-box">
						<a href="#" id="collapseBtn"><span className="title-icon"><i className="fas fa-chevron-left"></i></span><span className="title-text">COLLAPSE PANEL</span></a>
					</div>
				</div>
				<div className="sidenav-footer">
					<ul>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">Settings</span></a></li>
						<li className="sidenav-item"><a href="#"><span className="icons"><i className="fas fa-calendar-alt"></i></span><span className="item-title">Logout</span></a></li>
					</ul>
				</div>
			</div>
		</nav>
        )
    }
}


export default Sidebar