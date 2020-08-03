import {baseUrl} from './Server/baseUrl'

export const Authentication = (data) => (
    fetch(baseUrl+'find-user', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.length !== 0){
            return data[0]
        }
        else {
            return 'username or password error'
        }
        })
    .catch(e => new Error(e.message))
)

export const HandleSignUp = (data) => (
    fetch(baseUrl+'send-user', {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(e => new Error(e.message))
)

export const HandleAdUpload = (data) => (
    fetch(baseUrl+'send-ad', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(e => new Error(e.message))
)

export const HandleGettingAds = (data) => (
    fetch(baseUrl+'find-ads', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(e => new Error(e.message))
)

export const HandleImageUpload = (data) => (
    fetch('https://api.cloudinary.com/v1_1/gallarycloud/image/upload', {
        method: 'POST',
        body: data
    })
    .then(res => res.json())
    .then(im => im.url)
    .catch(e => new Error(e.message))
)