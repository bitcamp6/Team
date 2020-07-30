import React from 'react';

const Write = () => {
    return (
            <div>
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
        </div>
    );
};

export default Write;