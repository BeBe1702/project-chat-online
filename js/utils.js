export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// làm mịn dữ liệu cho 1 document
export function getDataFromDoc(doc, excepts = []) {
    let data = doc.data();
    data.id = doc.id;
    return data;
}

// làm mịn dữ liệu cho 1 tập (mảng) documents
export function getDataFromDocs(docs, excepts = []) {
    return docs.map(function(doc) {
        return getDataFromDoc(doc, excepts);
    });
}

// lưu thông tin người dùng hiện tại vào local storage 
export function saveCurrentUser(user) {
    localStorage.setItem('current-user', JSON.stringify(user));
}

// lấy thông tin người dùng hiện tại từ local storage 
export function getCurrentUser() {
    let result = localStorage.getItem('current-user');
    if(result) {
        return JSON.parse(result);
    }
    return null ; 
}