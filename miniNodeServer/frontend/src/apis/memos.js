import sendRequest from './sendRequest'
import sendMultipartRequest from './sendMultipartRequest'

export default{
    getMemos() {
        return sendRequest({
            url: '/api/memos',
            method: 'get'
        })
    },
    getMemo(memoId){
        return sendRequest({
            url: '/api/memos/' + memoId,
            method: 'get'
        })
    },
    addMemo(data){
        return sendMultipartRequest({
            url: '/api/memos',
            method: 'post',
            data,
        }) 
    },
    putMemo(memoId,data){
        return sendMultipartRequest({
            url: '/api/memos/' + memoId,
            method: 'put',
            data,
        })
    },
    deleteMemo(memoId){
        return sendMultipartRequest({
            url: '/api/memos/' + memoId,
            method: 'delete',
        })
    },
    getAdminMemos(){
        return sendMultipartRequest({
            url: '/api/admin/memos',
            method: 'get',
        })
    }
    
}