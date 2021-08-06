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
    }
}