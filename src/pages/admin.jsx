import React from "react";
import '../assets/css/shared/style.css'
import '../assets/css/demo_1/style.css'

const Admin = () => {
        return(
            <div>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Admin</title>
                {/* plugins:css */}
                <link rel="stylesheet" href="../assets/vendors/iconfonts/mdi/css/materialdesignicons.min.css" />
                <link rel="stylesheet" href="../assets/vendors/iconfonts/ionicons/css/ionicons.css" />
                <link rel="stylesheet" href="../assets/vendors/iconfonts/typicons/src/font/typicons.css" />
                <link rel="stylesheet" href="../assets/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css" />
                <link rel="stylesheet" href="../assets/vendors/css/vendor.bundle.base.css" />
                <link rel="stylesheet" href="../assets/vendors/css/vendor.bundle.addons.css" />
                {/* endinject */}
                {/* plugin css for this page */}
                {/* End plugin css for this page */}
                {/* inject:css */}
                <link rel="stylesheet" href="../assets/css/shared/style.css" />
                {/* endinject */}
                {/* Layout styles */}
                <link rel="stylesheet" href="../assets/css/demo_1/style.css" />
                {/* End Layout styles */}
                <link rel="shortcut icon" href="../assets/images/favicon.png" />
                <div className="container-scroller">
                    {/* partial:partials/_navbar.html */}
                    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                            <a className="navbar-brand brand-logo" href="index.html">
                                <img src="../assets/images/logo.svg" alt="logo" /> </a>
                            <a className="navbar-brand brand-logo-mini" href="index.html">
                                <img src="../assets/images/logo-mini.svg" alt="logo" /> </a>
                        </div>
                        <div className="navbar-menu-wrapper d-flex align-items-center">
                            <ul className="navbar-nav">
                                <li className="nav-item font-weight-semibold d-none d-lg-block">Help : +000 0000 0000</li>
                                <li className="nav-item dropdown language-dropdown">
                                    <a className="nav-link dropdown-toggle px-2 d-flex align-items-center" id="LanguageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                        <div className="d-inline-flex mr-0 mr-md-3">
                                            <div className="flag-icon-holder">
                                                <i className="flag-icon flag-icon-kr" />
                                            </div>
                                        </div>
                                        <span className="profile-text font-weight-medium d-none d-md-block">Korean</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-left navbar-dropdown py-2" aria-labelledby="LanguageDropdown">
                                        <a className="dropdown-item">
                                            <div className="flag-icon-holder">
                                                <i className="flag-icon flag-icon-kr" />
                                            </div>Korean
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="flag-icon-holder">
                                                <i className="flag-icon flag-icon-us" />
                                            </div>English
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="flag-icon-holder">
                                                <i className="flag-icon flag-icon-fr" />
                                            </div>French
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="flag-icon-holder">
                                                <i className="flag-icon flag-icon-ae" />
                                            </div>Arabic
                                        </a>
                                        <a className="dropdown-item">
                                            <div className="flag-icon-holder">
                                                <i className="flag-icon flag-icon-ru" />
                                            </div>Russian
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <form className="ml-auto search-form d-none d-md-block" action="#">
                                <div className="form-group">
                                    <input type="search" className="form-control" placeholder="Search Here" />
                                </div>
                            </form>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link count-indicator" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                        <i className="mdi mdi-bell-outline" />
                                        <span className="count">7</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                                        <a className="dropdown-item py-3">
                                            <p className="mb-0 font-weight-medium float-left"> 7개의 알림 </p>
                                            <span className="badge badge-pill badge-primary float-right">모두 보기</span>
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <img src="../assets/images/faces/face10.jpg" alt="image" className="img-sm profile-pic" /> </div>
                                            <div className="preview-item-content flex-grow py-2">
                                                <p className="preview-subject ellipsis font-weight-medium text-dark">정혜원</p>
                                                <p className="font-weight-light small-text"> 지도 API 수정 </p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <img src="../assets/images/faces/face12.jpg" alt="image" className="img-sm profile-pic" /> </div>
                                            <div className="preview-item-content flex-grow py-2">
                                                <p className="preview-subject ellipsis font-weight-medium text-dark">양정욱</p>
                                                <p className="font-weight-light small-text"> 업체 선정 </p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <img src="../assets/images/faces/face1.jpg" alt="image" className="img-sm profile-pic" /> </div>
                                            <div className="preview-item-content flex-grow py-2">
                                                <p className="preview-subject ellipsis font-weight-medium text-dark">이호섭</p>
                                                <p className="font-weight-light small-text"> 수익 리포트 </p>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link count-indicator" id="notificationDropdown" href="#" data-toggle="dropdown">
                                        <i className="mdi mdi-email-outline" />
                                        <span className="count bg-success">3</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                                        <a className="dropdown-item py-3 border-bottom">
                                            <p className="mb-0 font-weight-medium float-left">4개의 알림</p>
                                            <span className="badge badge-pill badge-primary float-right">모두 보기</span>
                                        </a>
                                        <a className="dropdown-item preview-item py-3">
                                            <div className="preview-thumbnail">
                                                <i className="mdi mdi-alert m-auto text-primary" />
                                            </div>
                                            <div className="preview-item-content">
                                                <h6 className="preview-subject font-weight-normal text-dark mb-1">버전 업데이트</h6>
                                                <p className="font-weight-light small-text mb-0"> 버전을 확인해주세요. </p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item preview-item py-3">
                                            <div className="preview-thumbnail">
                                                <i className="mdi mdi-settings m-auto text-primary" />
                                            </div>
                                            <div className="preview-item-content">
                                                <h6 className="preview-subject font-weight-normal text-dark mb-1">사업체 등록</h6>
                                                <p className="font-weight-light small-text mb-0"> Private message </p>
                                            </div>
                                        </a>
                                        <a className="dropdown-item preview-item py-3">
                                            <div className="preview-thumbnail">
                                                <i className="mdi mdi-airballoon m-auto text-primary" />
                                            </div>
                                            <div className="preview-item-content">
                                                <h6 className="preview-subject font-weight-normal text-dark mb-1">게시판 업데이트</h6>
                                                <p className="font-weight-light small-text mb-0"> 2일 남았습니다. </p>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown d-none d-xl-inline-block user-dropdown">
                                    <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                        <img className="img-xs rounded-circle" src="../assets/images/faces/face8.jpg" alt="Profile image" /> </a>
                                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                        <div className="dropdown-header text-center">
                                            <img className="img-md rounded-circle" src="../assets/images/faces/face8.jpg" alt="Profile image" />
                                            <p className="mb-1 mt-3 font-weight-semibold">관리자</p>
                                            <p className="font-weight-light text-muted mb-0">관리자@movin.com</p>
                                        </div>
                                        <a className="dropdown-item">내 정보 보기<span className="badge badge-pill badge-danger">1</span><i className="dropdown-item-icon ti-dashboard" /></a>
                                        <a className="dropdown-item">메시지<i className="dropdown-item-icon ti-comment-alt" /></a>
                                        <a className="dropdown-item">활동 로그<i className="dropdown-item-icon ti-location-arrow" /></a>
                                        <a className="dropdown-item">고객 지원<i className="dropdown-item-icon ti-help-alt" /></a>
                                        <a className="dropdown-item">로그 아웃<i className="dropdown-item-icon ti-power-off" /></a>
                                    </div>
                                </li>
                            </ul>
                            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                                <span className="mdi mdi-menu" />
                            </button>
                        </div>
                    </nav>
                    {/* partial */}
                    <div className="container-fluid page-body-wrapper">
                        {/* partial:partials/_sidebar.html */}
                        <nav className="sidebar sidebar-offcanvas" id="sidebar">
                            <ul className="nav">
                                <li className="nav-item nav-profile">
                                    <a href="#" className="nav-link">
                                        <div className="profile-image">
                                            <img className="img-xs rounded-circle" src="../assets/images/faces/face8.jpg" alt="profile image" />
                                            <div className="dot-indicator bg-success" />
                                        </div>
                                        <div className="text-wrapper">
                                            <p className="profile-name">관리자</p>
                                            <p className="designation">Movin</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item nav-category">eotlqhrm</li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                        <i className="menu-icon typcn typcn-document-text" />
                                        <span className="menu-title">게시판</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                        <i className="menu-icon typcn typcn-coffee" />
                                        <span className="menu-title">Basic UI Elements</span>
                                        <i className="menu-arrow" />
                                    </a>
                                    <div className="collapse" id="ui-basic">
                                        <ul className="nav flex-column sub-menu">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/ui-features/typography.html">Typography</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/forms/basic_elements.html">
                                        <i className="menu-icon typcn typcn-shopping-bag" />
                                        <span className="menu-title">Form elements</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/charts/chartjs.html">
                                        <i className="menu-icon typcn typcn-th-large-outline" />
                                        <span className="menu-title">Charts</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/tables/basic-table.html">
                                        <i className="menu-icon typcn typcn-bell" />
                                        <span className="menu-title">Tables</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/icons/font-awesome.html">
                                        <i className="menu-icon typcn typcn-user-outline" />
                                        <span className="menu-title">Icons</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                                        <i className="menu-icon typcn typcn-document-add" />
                                        <span className="menu-title">User Pages</span>
                                        <i className="menu-arrow" />
                                    </a>
                                    <div className="collapse" id="auth">
                                        <ul className="nav flex-column sub-menu">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/samples/login.html"> Login </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/samples/register.html"> Register </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/samples/error-404.html"> 404 </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/samples/error-500.html"> 500 </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        {/* partial */}
                        <div className="main-panel">
                            <div className="content-wrapper">
                                {/* Page Title Header Starts*/}
                                <div className="row page-title-header">
                                    <div className="col-12">
                                        <div className="page-header">
                                            <h4 className="page-title">Dashboard</h4>
                                            <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                                                <ul className="quick-links">
                                                    <li><a href="#">ICE Market data</a></li>
                                                    <li><a href="#">Own analysis</a></li>
                                                    <li><a href="#">Historic market data</a></li>
                                                </ul>
                                                <ul className="quick-links ml-auto">
                                                    <li><a href="#">Settings</a></li>
                                                    <li><a href="#">Analytics</a></li>
                                                    <li><a href="#">Watchlist</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="page-header-toolbar">
                                            <div className="btn-group toolbar-item" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-secondary"><i className="mdi mdi-chevron-left" /></button>
                                                <button type="button" className="btn btn-secondary">03/02/2019 - 20/08/2019</button>
                                                <button type="button" className="btn btn-secondary"><i className="mdi mdi-chevron-right" /></button>
                                            </div>
                                            <div className="filter-wrapper">
                                                <div className="dropdown toolbar-item">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownsorting" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Day</button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownsorting">
                                                        <a className="dropdown-item" href="#">Last Day</a>
                                                        <a className="dropdown-item" href="#">Last Month</a>
                                                        <a className="dropdown-item" href="#">Last Year</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="advanced-link toolbar-item">Advanced Options</a>
                                            </div>
                                            <div className="sort-wrapper">
                                                <button type="button" className="btn btn-primary toolbar-item">New</button>
                                                <div className="dropdown ml-lg-auto ml-3 toolbar-item">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownexport" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Export</button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownexport">
                                                        <a className="dropdown-item" href="#">Export as PDF</a>
                                                        <a className="dropdown-item" href="#">Export as DOCX</a>
                                                        <a className="dropdown-item" href="#">Export as CDR</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Page Title Header Ends*/}
                                <div className="row">
                                    <div className="col-md-12 grid-margin">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="d-flex">
                                                            <div className="wrapper">
                                                                <h3 className="mb-0 font-weight-semibold">32,451</h3>
                                                                <h5 className="mb-0 font-weight-medium text-primary">Visits</h5>
                                                                <p className="mb-0 text-muted">+14.00(+0.50%)</p>
                                                            </div>
                                                            <div className="wrapper my-auto ml-auto ml-lg-4">
                                                                <canvas height={50} width={100} id="stats-line-graph-1" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                                                        <div className="d-flex">
                                                            <div className="wrapper">
                                                                <h3 className="mb-0 font-weight-semibold">15,236</h3>
                                                                <h5 className="mb-0 font-weight-medium text-primary">Impressions</h5>
                                                                <p className="mb-0 text-muted">+138.97(+0.54%)</p>
                                                            </div>
                                                            <div className="wrapper my-auto ml-auto ml-lg-4">
                                                                <canvas height={50} width={100} id="stats-line-graph-2" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                                                        <div className="d-flex">
                                                            <div className="wrapper">
                                                                <h3 className="mb-0 font-weight-semibold">7,688</h3>
                                                                <h5 className="mb-0 font-weight-medium text-primary">Conversation</h5>
                                                                <p className="mb-0 text-muted">+57.62(+0.76%)</p>
                                                            </div>
                                                            <div className="wrapper my-auto ml-auto ml-lg-4">
                                                                <canvas height={50} width={100} id="stats-line-graph-3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                                                        <div className="d-flex">
                                                            <div className="wrapper">
                                                                <h3 className="mb-0 font-weight-semibold">1,553</h3>
                                                                <h5 className="mb-0 font-weight-medium text-primary">Downloads</h5>
                                                                <p className="mb-0 text-muted">+138.97(+0.54%)</p>
                                                            </div>
                                                            <div className="wrapper my-auto ml-auto ml-lg-4">
                                                                <canvas height={50} width={100} id="stats-line-graph-4" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title mb-0">Sales Statistics Overview</h4>
                                                <div className="d-flex flex-column flex-lg-row">
                                                    <p>Lorem ipsum is placeholder text commonly used</p>
                                                    <ul className="nav nav-tabs sales-mini-tabs ml-lg-auto mb-4 mb-md-0" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" id="sales-statistics_switch_1" data-toggle="tab" role="tab" aria-selected="true">1D</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" id="sales-statistics_switch_2" data-toggle="tab" role="tab" aria-selected="false">5D</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" id="sales-statistics_switch_3" data-toggle="tab" role="tab" aria-selected="false">1M</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" id="sales-statistics_switch_4" data-toggle="tab" role="tab" aria-selected="false">1Y</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex flex-column flex-lg-row">
                                                    <div className="data-wrapper d-flex mt-2 mt-lg-0">
                                                        <div className="wrapper pr-5">
                                                            <h5 className="mb-0">Total Cost</h5>
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="font-weight-semibold mb-0">15,263</h4>
                                                                <small className="ml-2 text-gray d-none d-lg-block"><b>89.5%</b> of 20,000 Total</small>
                                                            </div>
                                                        </div>
                                                        <div className="wrapper">
                                                            <h5 className="mb-0">Total Revenue</h5>
                                                            <div className="d-flex align-items-center">
                                                                <h4 className="font-weight-semibold mb-0">$753,098</h4>
                                                                <small className="ml-2 text-gray d-none d-lg-block"><b>10.5%</b> of 20,000 Total</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ml-lg-auto" id="sales-statistics-legend" />
                                                </div>
                                                <canvas className="mt-5" height={120} id="sales-statistics-overview" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body d-flex flex-column">
                                                <div className="wrapper">
                                                    <h4 className="card-title mb-0">Net Profit Margin</h4>
                                                    <p>Started collecting data from February 2019</p>
                                                    <div className="mb-4" id="net-profit-legend" />
                                                </div>
                                                <canvas className="my-auto mx-auto" height={250} id="net-profit" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-6 grid-margin stretch-card">
                                                <div className="card">
                                                    <div className="card-body pb-0">
                                                        <div className="d-flex justify-content-between">
                                                            <h4 className="card-title mb-0">Total Revenue</h4>
                                                            <p className="font-weight-semibold mb-0">+1.37%</p>
                                                        </div>
                                                        <h3 className="font-weight-medium mb-4">184.42K</h3>
                                                    </div>
                                                    <canvas className="mt-n4" height={90} id="total-revenue">
                                                    </canvas></div>
                                            </div>
                                            <div className="col-md-6 grid-margin stretch-card">
                                                <div className="card">
                                                    <div className="card-body pb-0">
                                                        <div className="d-flex justify-content-between">
                                                            <h4 className="card-title mb-0">Transaction</h4>
                                                            <p className="font-weight-semibold mb-0">-2.87%</p>
                                                        </div>
                                                        <h3 className="font-weight-medium">147.7K</h3>
                                                    </div>
                                                    <canvas className="mt-n3" height={90} id="total-transaction">
                                                    </canvas></div>
                                            </div>
                                            <div className="col-md-12 grid-margin">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title mb-0">Market Overview</h4>
                                                        <div className="d-flex align-items-center justify-content-between w-100">
                                                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                            <div className="dropdown">
                                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dateSorter" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">This Month</button>
                                                                <div className="dropdown-menu" aria-labelledby="dateSorter">
                                                                    <div className="dropdown-item" id="market-overview_1">Daily</div>
                                                                    <div className="dropdown-item" id="market-overview_2">Weekly</div>
                                                                    <div className="dropdown-item" id="market-overview_3">Monthly</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-end">
                                                            <h3 className="mb-0 font-weight-semibold">$36,2531.00</h3>
                                                            <p className="mb-0 font-weight-medium mr-2 ml-2 mb-1">USD</p>
                                                            <p className="mb-0 text-success font-weight-semibold mb-1">(+1.37%)</p>
                                                        </div>
                                                        <canvas className="mt-4" height={100} id="market-overview-chart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 grid-margin">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <h4 className="card-title mb-0">Invoice</h4>
                                                            <a href="#"><small>Show All</small></a>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quod cupiditate esse fuga</p>
                                                        <div className="table-responsive">
                                                            <table className="table table-striped table-hover">
                                                                <thead>
                                                                <tr>
                                                                    <th>Invoice ID</th>
                                                                    <th>Customer</th>
                                                                    <th>Status</th>
                                                                    <th>Due Date</th>
                                                                    <th>Amount</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>INV-87239</td>
                                                                    <td>Viola Ford</td>
                                                                    <td>Paid</td>
                                                                    <td>20 Jan 2019</td>
                                                                    <td>$755</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>INV-87239</td>
                                                                    <td>Dylan Waters</td>
                                                                    <td>Unpaid</td>
                                                                    <td>23 Feb 2019</td>
                                                                    <td>$800</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>INV-87239</td>
                                                                    <td>Louis Poole</td>
                                                                    <td>Unpaid</td>
                                                                    <td>25 Mar 2019</td>
                                                                    <td>$463</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>INV-87239</td>
                                                                    <td>Vera Howell</td>
                                                                    <td>Paid</td>
                                                                    <td>27 Mar 2019</td>
                                                                    <td>$235</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>INV-87239</td>
                                                                    <td>Allie Goodman</td>
                                                                    <td>Unpaid</td>
                                                                    <td>1 Apr 2019</td>
                                                                    <td>$657</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 grid-margin stretch-card">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="d-flex align-items-center pb-2">
                                                                    <div className="dot-indicator bg-danger mr-2" />
                                                                    <p className="mb-0">Total Sales</p>
                                                                </div>
                                                                <h4 className="font-weight-semibold">$7,590</h4>
                                                                <div className="progress progress-md">
                                                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '78%'}} aria-valuenow={78} aria-valuemin={0} aria-valuemax={78} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mt-4 mt-md-0">
                                                                <div className="d-flex align-items-center pb-2">
                                                                    <div className="dot-indicator bg-success mr-2" />
                                                                    <p className="mb-0">Active Users</p>
                                                                </div>
                                                                <h4 className="font-weight-semibold">$5,460</h4>
                                                                <div className="progress progress-md">
                                                                    <div className="progress-bar bg-success" role="progressbar" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={45} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 grid-margin stretch-card average-price-card">
                                                <div className="card text-white">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between pb-2 align-items-center">
                                                            <h2 className="font-weight-semibold mb-0">4,624</h2>
                                                            <div className="icon-holder">
                                                                <i className="mdi mdi-briefcase-outline" />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <h5 className="font-weight-semibold mb-0">Average Price</h5>
                                                            <p className="text-white mb-0">Since last month</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-12 grid-margin">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h1 className="card-title mb-4">Website Audience Metrics</h1>
                                                        <div className="row">
                                                            <div className="col-5 col-md-5">
                                                                <div className="wrapper border-bottom mb-2 pb-2">
                                                                    <h4 className="font-weight-semibold mb-0">523,200</h4>
                                                                    <div className="d-flex align-items-center">
                                                                        <p className="mb-0">Page Views</p>
                                                                        <div className="dot-indicator bg-secondary ml-auto" />
                                                                    </div>
                                                                </div>
                                                                <div className="wrapper">
                                                                    <h4 className="font-weight-semibold mb-0">753,098</h4>
                                                                    <div className="d-flex align-items-center">
                                                                        <p className="mb-0">Bounce Rate</p>
                                                                        <div className="dot-indicator bg-primary ml-auto" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-5 col-md-7 d-flex pl-4">
                                                                <div className="ml-auto">
                                                                    <canvas height={100} id="realtime-statistics" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-5">
                                                            <div className="col-6">
                                                                <div className="d-flex align-items-center mb-2">
                                                                    <div className="icon-holder bg-primary text-white py-1 px-3 rounded mr-2">
                                                                        <i className="icon ion-logo-buffer icon-sm" />
                                                                    </div>
                                                                    <h2 className="font-weight-semibold mb-0">3,605</h2>
                                                                </div>
                                                                <p>Since last week</p>
                                                                <p><span className="font-weight-medium">0.51%</span> (30 days)</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="mt-n3 ml-auto" id="dashboard-guage-chart" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 grid-margin">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title mb-4">World sellings</h4>
                                                        <div id="dashboard-vmap" className="vector-map" />
                                                        <div className="wrapper">
                                                            <div className="d-flex w-100 pt-2 mt-4">
                                                                <p className="mb-0 font-weight-semibold">California</p>
                                                                <div className="wrapper ml-auto d-flex align-items-center">
                                                                    <p className="font-weight-semibold mb-0">26,437</p>
                                                                    <p className="ml-1 mb-0">26%</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex w-100 pt-2">
                                                                <p className="mb-0 font-weight-semibold">Washington</p>
                                                                <div className="wrapper ml-auto d-flex align-items-center">
                                                                    <p className="font-weight-semibold mb-0">3252</p>
                                                                    <p className="ml-1 mb-0">64%</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex w-100 pt-2">
                                                                <p className="mb-0 font-weight-semibold">Michigan</p>
                                                                <div className="wrapper ml-auto d-flex align-items-center">
                                                                    <p className="font-weight-semibold mb-0">4,987</p>
                                                                    <p className="ml-1 mb-0">30%</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 grid-margin">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title mb-0">Top Performer</h4>
                                                        <div className="d-flex mt-3 py-2 border-bottom">
                                                            <img className="img-sm rounded-circle" src="../assets/images/faces/face3.jpg" alt="profile image" />
                                                            <div className="wrapper ml-2">
                                                                <p className="mb-n1 font-weight-semibold">Ray Douglas</p>
                                                                <small>162543</small>
                                                            </div>
                                                            <small className="text-muted ml-auto">1 Hours ago</small>
                                                        </div>
                                                        <div className="d-flex py-2 border-bottom">
                                                            <span className="img-sm rounded-circle bg-warning text-white text-avatar">OH</span>
                                                            <div className="wrapper ml-2">
                                                                <p className="mb-n1 font-weight-semibold">Ora Hill</p>
                                                                <small>162543</small>
                                                            </div>
                                                            <small className="text-muted ml-auto">4 Hours ago</small>
                                                        </div>
                                                        <div className="d-flex py-2 border-bottom">
                                                            <img className="img-sm rounded-circle" src="../assets/images/faces/face4.jpg" alt="profile image" />
                                                            <div className="wrapper ml-2">
                                                                <p className="mb-n1 font-weight-semibold">Brian Dean</p>
                                                                <small>162543</small>
                                                            </div>
                                                            <small className="text-muted ml-auto">4 Hours ago</small>
                                                        </div>
                                                        <div className="d-flex pt-2">
                                                            <span className="img-sm rounded-circle bg-success text-white text-avatar">OB</span>
                                                            <div className="wrapper ml-2">
                                                                <p className="mb-n1 font-weight-semibold">Olive Bridges</p>
                                                                <small>162543</small>
                                                            </div>
                                                            <small className="text-muted ml-auto">7 Hours ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title mb-0">Recent Events</h4>
                                                <div className="d-flex py-2 border-bottom">
                                                    <div className="wrapper">
                                                        <small className="text-muted">Mar 14, 2019</small>
                                                        <p className="font-weight-semibold text-gray mb-0">Change in Directors</p>
                                                    </div>
                                                    <small className="text-muted ml-auto">Edit event</small>
                                                </div>
                                                <div className="d-flex py-2 border-bottom">
                                                    <div className="wrapper">
                                                        <small className="text-muted">Mar 14, 2019</small>
                                                        <p className="font-weight-semibold text-gray mb-0">Other Events</p>
                                                    </div>
                                                    <small className="text-muted ml-auto">Edit event</small>
                                                </div>
                                                <div className="d-flex py-2 border-bottom">
                                                    <div className="wrapper">
                                                        <small className="text-muted">Mar 14, 2019</small>
                                                        <p className="font-weight-semibold text-gray mb-0">Quarterly Report</p>
                                                    </div>
                                                    <small className="text-muted ml-auto">Edit event</small>
                                                </div>
                                                <div className="d-flex pt-2">
                                                    <div className="wrapper">
                                                        <small className="text-muted">Mar 14, 2019</small>
                                                        <p className="font-weight-semibold text-gray mb-0">Change in Directors</p>
                                                    </div>
                                                    <small className="text-muted ml-auto">Edit event</small>
                                                </div>
                                                <a className="d-block mt-5" href="#">Show all</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between pb-3">
                                                    <h4 className="card-title mb-0">Activities</h4>
                                                    <p className="mb-0 text-muted">20 finished, 5 remaining</p>
                                                </div>
                                                <ul className="timeline">
                                                    <li className="timeline-item">
                                                        <p className="timeline-content"><a href="#">Ben Tossell</a> assign you a task</p>
                                                        <p className="event-time">Just now</p>
                                                    </li>
                                                    <li className="timeline-item">
                                                        <p className="timeline-content"><a href="#">Ben Tossell</a> assign you a task</p>
                                                        <p className="event-time">Just now</p>
                                                    </li>
                                                    <li className="timeline-item">
                                                        <p className="timeline-content"><a href="#">Ben Tossell</a> assign you a task</p>
                                                        <p className="event-time">Just now</p>
                                                    </li>
                                                    <li className="timeline-item">
                                                        <p className="timeline-content"><a href="#">Ben Tossell</a> assign you a task</p>
                                                        <p className="event-time">Just now</p>
                                                    </li>
                                                    <li className="timeline-item">
                                                        <p className="timeline-content"><a href="#">Ben Tossell</a> assign you a task</p>
                                                        <p className="event-time">Just now</p>
                                                    </li>
                                                </ul>
                                                <a className="d-block mt-3" href="#">Show all</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title mb-0">People Also Watch</h4>
                                                <div className="table-responsive">
                                                    <table className="table table-stretched">
                                                        <thead>
                                                        <tr>
                                                            <th>Symbol</th>
                                                            <th>Last Price</th>
                                                            <th>Change</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <p className="mb-1 text-dark font-weight-medium">NFLX</p><small className="font-weight-medium">Netflix, Inc.</small>
                                                            </td>
                                                            <td className="font-weight-medium">$250.00</td>
                                                            <td className="text-success font-weight-medium">+12.64</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p className="mb-1 text-dark font-weight-medium">TSLA</p><small className="font-weight-medium">Tesla, Inc.</small>
                                                            </td>
                                                            <td className="font-weight-medium">$458.00</td>
                                                            <td className="text-danger font-weight-medium">-14.53</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p className="mb-1 text-dark font-weight-medium">GOOG</p><small className="font-weight-medium">Alphabet, Inc.</small>
                                                            </td>
                                                            <td className="font-weight-medium">$250.00</td>
                                                            <td className="text-danger font-weight-medium">+12.64</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p className="mb-1 text-dark font-weight-medium">AMZN</p><small className="font-weight-medium">Amazon.com, Inc.</small>
                                                            </td>
                                                            <td className="font-weight-medium">$546.00</td>
                                                            <td className="text-success font-weight-medium">+24.34</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <a className="d-block mt-3" href="#">Show all</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* content-wrapper ends */}
                            {/* partial:partials/_footer.html */}
                            <footer className="footer">
                                <div className="container-fluid clearfix">
                                    <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © Movin 2020 <a href="http://www.bootstrapdash.com/" target="_blank">하이퍼링크</a>. All rights reserved.</span>
                                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">대충 슬로건 짤<i className="mdi mdi-heart text-danger" />
                  </span>
                                </div>
                            </footer>
                            {/* partial */}
                        </div>
                        {/* main-panel ends */}
                    </div>
                    {/* page-body-wrapper ends */}
                </div>
                {/* container-scroller */}
                {/* plugins:js */}
                {/* endinject */}
                {/* Plugin js for this page*/}
                {/* End plugin js for this page*/}
                {/* inject:js */}
                {/* endinject */}
                {/* Custom js for this page*/}
                {/* End custom js for this page*/}
           </div>
        )
}
export default Admin