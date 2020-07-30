import React from 'react';
import {Navigator,SideBar,Footer} from '../commons/index'
import '../assets/css/sb-admin-2.css'

const Write = () => {
    return (
            <>

                <>
                    <Navigator/>
                    <SideBar/>
                    <div id="wrapper">
                        <div id="page-wrapper">
                            <div className="row">
                                <div className="col-lg-12"><br/>
                                    <h2 className="page-header">이벤트</h2><br/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="panel panel-default">
                                        {/*<div className="panel-heading">
                                        <h3>후기</h3>
                                    </div>*/}
                                        {/* /.panel-heading */}
                                        <div className="panel-body">
                                            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                                <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Editor</th>
                                                    <th>Date</th>
                                                    <th>View</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="odd gradeX">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 4.0</td>
                                                    <td>Win 95+</td>
                                                    <td className="center">4</td>
                                                </tr>
                                                <tr className="even gradeC">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 5.0</td>
                                                    <td>Win 95+</td>
                                                    <td className="center">5</td>
                                                </tr>
                                                <tr className="odd gradeA">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 5.5</td>
                                                    <td>Win 95+</td>
                                                    <td className="center">5.5</td>
                                                </tr>
                                                <tr className="even gradeA">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 6</td>
                                                    <td>Win 98+</td>
                                                    <td className="center">6</td>
                                                </tr>
                                                <tr className="odd gradeA">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 7</td>
                                                    <td>Win XP SP2+</td>
                                                    <td className="center">7</td>
                                                </tr>
                                                <tr className="even gradeA">
                                                    <td>Trident</td>
                                                    <td>AOL browser (AOL desktop)</td>
                                                    <td>Win XP</td>
                                                    <td className="center">6</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* /.panel-body */}
                                    </div>
                                    {/* /.panel */}
                                </div>
                                {/* /.col-lg-12 */}
                            </div>
                        </div>
                        {/* /#page-wrapper */}
                    </div>
                    <Footer/>
                </>

                <Navigator/>
                <SideBar/>
                <form method = "post">
                    <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">제목</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="title" placeholder="제목을 작성해주세요." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">작성자</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="crea_id" placeholder="이름을 적어주세요." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">내용</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="contents" rows={10} defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-info">등록하기</button>
                    <button type="button" className="btn btn-secondary">목록으로</button>
                </form>
                <Footer/>
        </>
    );
};

export default Write;